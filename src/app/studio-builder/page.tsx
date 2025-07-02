'use client'
import styles from './style.module.css'

import Konva from "konva";

import { useEffect, useRef, useState } from 'react';
import {Stage, Layer, Rect, Transformer, Image as KonvaImage, Text, Group} from 'react-konva';
import axios from "axios";
import {useWindowSize} from "@/app/studio-builder/UseWindowSize";
import {KonvaWindowsSize} from "@/app/studio-builder/konva-windiws-size";

export default function Home() {

    //limited drag and resize
    //https://konvajs.org/docs/sandbox/Limited_Drag_And_Resize.html
    const { width, height } = useWindowSize();
    const { Kwidth , Kheight} = KonvaWindowsSize();
    const textRef = useRef(null);
    const [stageSize, setStageSize] = useState<{width:number,height:number,url:string,scale:number,image:HTMLImageElement, image_specs :{height:number,width:number}|null}>({ width: 0, height: 0 ,scale:1,url:'',image:null,image_specs:null});
    const stageRef = useRef(null);
    const ZOOM_FACTOR = 1.2;
    const groupRef = useRef(null);
    const imageRef = useRef<any>(null);
    const transformerRef = useRef<any>(null);

    // Update stage dimensions to half window

    //steps :
    // 1 get the Kwidth and Kheight the place that required the designer should be locate inside
    // 2 divide  the place required with data from the server
    // 3 thsi will be the factor
    // mutiply the data f
    useEffect(() => {


        if(Kwidth != 0)
        axios.get('https://stage-app.teelaunch.com/api/v2/blanks/300/stages',{headers:{'Authorization':'Bearer wddsLiX6bLRr37fBTvm6c8HI2nWGJ1e9XxMm8GTD4IqmPQSZSNncOq2SdzKg'}}).then((
            response
        )=>{

            console.log('preview : ',response.data.data[0].stages[0].sub_location_settings[0].preview)
            console.log('image   : ',response.data.data[0].stages[0].image)

            const img = new window.Image();
            img.crossOrigin = 'anonymous'
            img.src = 'https://iili.io/Fu7wb9e.md.png'
            const store_width_max = response.data.data[0].stages[0].create_types[0].image_requirement.store_width_max;
            const store_height_max = response.data.data[0].stages[0].create_types[0].image_requirement.store_height_max;
            const requiredAspectRatio  = (store_width_max/store_height_max).toFixed(1);
            const preview_width =  (response.data.data[0].stages[0].image.width * response.data.data[0].stages[0].sub_location_settings[0].preview.width/100);
            const preview_height =  (response.data.data[0].stages[0].image.height * response.data.data[0].stages[0].sub_location_settings[0].preview.height/100);
            const previewAspectRatio  = (preview_width/preview_height).toFixed(1);


            const scaleFactor = Math.min(Kwidth / store_width_max, Kheight / store_height_max)
            img.onload = () => {
                setStageSize({
                    width: store_width_max * scaleFactor,
                    height: store_height_max * scaleFactor,
                    scale:scaleFactor,
                    url:response.data.data[0].stages[0].image.image_url,
                    image:img,
                    image_specs : {
                        width:img.width,
                        height:img.height
                    }
                })

                if (groupRef.current) {
                    groupRef.current.scale({ x:scaleFactor, y: scaleFactor});
                }
            }



        }).catch((e)=>{
            console.log(e)
        })

    }, [Kwidth]);

    useEffect(() => {
        if (transformerRef.current && imageRef.current) {
            transformerRef.current.nodes([imageRef.current]);
            transformerRef.current.getLayer().batchDraw();
        }
    }, [stageSize.image]);



    const updateText = () => {
        const imageNode = imageRef.current;
        const textNode = textRef.current;
        if (!imageNode || !textNode) return;

        const scaleX = imageNode.scaleX();
        const scaleY = imageNode.scaleY();

        const newWidth = Math.max(5, imageNode.width() * scaleX);
        const newHeight = Math.max(5, imageNode.height() * scaleY);

        imageNode.scaleX(1);
        imageNode.scaleY(1);
        imageNode.width(newWidth);
        imageNode.height(newHeight);

        const newX = imageNode.x();
        const newY = imageNode.y();

        setStageSize({...stageSize,image_specs:{width: Math.round(width), height: Math.round(height)}});

        // Center the text under the image
        textNode.text(
            `X: ${Math.round(newX)}, Y: ${Math.round(newY)}\nWidth: ${Math.round(newWidth)} px, Height: ${Math.round(newHeight)} px`
        );
        textNode.x(newX + newWidth / 2 - textNode.width() / 2);
        textNode.y(newY + newHeight + 5);
    };



    const handleZoom = (zoomIn) => {
        const factor = zoomIn ? ZOOM_FACTOR : 1 / ZOOM_FACTOR;

        const newStageWidth = stageSize.width * factor;
        const newStageHeight = stageSize.height * factor;
        const newScale = stageSize.scale * factor;
        setStageSize({
            ...stageSize,width: newStageWidth,
            height: newStageHeight,
            scale:newScale
        });

        // Apply the new scale to the group
        if (groupRef.current) {
            groupRef.current.scale({ x: newScale, y: newScale });
        }
    };

    const handleSaveImage = () => {
        const stage = stageRef.current;
        if (!stage) return;
        const data = response.data.data[0].stages[0].create_types[0].image_requirement.store_width_max
        console.log(data)
        // try {
        //     const dataURL = stage.toDataURL({ pixelRatio: 10 });
        //
        //     const link = document.createElement('a');
        //     link.download = 'konva-export.png';
        //     link.href = dataURL;
        //     link.click();
        // } catch (err) {
        //     console.error("Export failed:", err);
        //     alert("Export failed. This may be due to image CORS policy.");
        // }
    };


    return <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div className={styles.header}>
            <div>Width : {width}</div>   <div>Height : {height}</div>  <div>Kwidth : {Kwidth}</div> <div>KHeight : {Kheight}</div> <div>scale : {Math.round(stageSize.scale * 100)}%</div>
            <button onClick={() => handleZoom(true)}>Zoom In</button>
            <button onClick={() => handleZoom(false)}>Zoom Out</button>
            <button onClick={handleSaveImage}>Download Image</button>
        </div>

        {/* This div will take all remaining space, even if it's empty */}
        <div  style={{ flex: 1, background: 'lightblue' ,display:"flex" ,flexDirection:'row' }}>
            <div style={{width:'7%',margin:10,backgroundColor:'white',borderRadius:10}}></div>
            <div id={'main-editor'} style={{flex: 1, margin:10, background: 'white' ,display:"flex",borderRadius:10,position:'relative'}}>
                <div style={{width:Math.round(Kwidth),height:Math.round(Kheight),borderRadius:10,overflow:"auto",backgroundColor:'lightgray',alignContent:'center'}}>
                    <div  style={{width:Math.round(stageSize.width),height:Math.round(stageSize.height),backgroundColor:'white', border: '1px solid #ccc',
                        display: 'block',
                        margin: 'auto',}}>
                    <Stage width={stageSize.width} height={stageSize.height} ref={stageRef}>
                        <Layer>
                            <Group ref={groupRef}>
                            <Rect
                                x={0}
                                y={0}
                                width={stageSize.width}
                                height={stageSize.height}
                                listening={false}
                            />
                            {
                                (stageSize.image && stageSize.image_specs) &&
                                (
                                    <>
                                        <KonvaImage
                                            image={stageSize.image}
                                            x={50}
                                            y={50}
                                            draggable
                                            ref={imageRef}
                                            width={stageSize.image_specs.width}
                                            height={stageSize.image_specs.height}
                                            onTransform={updateText}
                                            onTransformEnd={updateText}
                                            onDragMove={updateText}
                                            onDragEnd={updateText}
                                        />
                                        <Transformer
                                            ref={transformerRef}
                                            rotateEnabled={true}
                                            enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right','middle-right','middle-left','top-center', 'bottom-center']}


                                        />
                                        <Text
                                            ref={textRef}
                                            x={50}
                                            y={50 + stageSize.image_specs.height + 10}
                                            text={`${stageSize.image_specs.width}x${stageSize.image_specs.height}`}
                                            fontSize={14}
                                            fill="black"
                                        />
                                    </>
                                )
                            }

                            </Group>
                        </Layer>
                    </Stage>
                    </div>
                </div>
            </div>
        </div>


    </div>



}







