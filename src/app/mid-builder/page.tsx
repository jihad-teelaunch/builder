'use client'
import { useEffect, useRef, useState} from "react";
import {Stage,Layer,Rect,Image as KonvaImage,Transformer} from  'react-konva'
import styles from './style.module.css'
import axios from "axios";
import Konva from "konva";
import pixelRatio = Konva.pixelRatio;



export default function Home() {

    const containerRef = useRef(null);
    const transformerRef = useRef(null);
    const imageRef = useRef(null);
    const inputRef = useRef(null);
    const stageRef = useRef(null)
    const [data,setdata] = useState()
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [image, setImage] = useState({
        img:null,
        width:0,
        height:0
    });
    const [stage,setStage] = useState({
        'url': '',
        preview : {
            top:0,
            left:0,
            right:0,
            bottom:0
        }
    })

    const handleImageUpload = (e) =>{
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (evt) {
            const img = new window.Image();
            img.src = evt.target.result;
            img.onload = () => {
                const width = img.width;
                const height = img.height;
                const scale = Math.min(width / dimensions.width, height / dimensions.height);
                setImage({
                    // @ts-ignore
                    img:img,
                    width: width / scale,
                    // @ts-ignore
                    height: height /scale

                });
            };
        };
        reader.readAsDataURL(file);
    }

    // Observe container size
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateSize(); // Initial size

        const observer = new ResizeObserver(updateSize);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        if (image && transformerRef.current && imageRef.current) {
            transformerRef.current.nodes([imageRef.current]);
            transformerRef.current.getLayer().batchDraw();
        }
    }, [image]);

    useEffect(()=>{
        axios.get('https://stage-app.teelaunch.com/api/v2/blanks/1/stages',{headers:{'Authorization':'Bearer wddsLiX6bLRr37fBTvm6c8HI2nWGJ1e9XxMm8GTD4IqmPQSZSNncOq2SdzKg'}}).then((
            response
        )=>{
          const url =   response.data.data[0].stages[0].image.file_url

            setdata(response)
            // const store_width_max = response.data.data.stageGroups[0].stages[0].createTypes[0].imageRequirement.storeWidthMax;
            // const store_height_max = response.data.data.stageGroups[0].stages[0].createTypes[0].imageRequirement.storeHeightMax;
            // const requiredAspectRatio = (store_width_max / store_height_max).toFixed(1);
            // console.log(requiredAspectRatio)

            setStage({
                url: response.data.data[0].stages[0].image.file_url,
                preview: response.data.data[0].stages[0].sub_location_settings[0].preview
            })

        }).catch(e=>{

        })
    }, [])

    // @ts-ignore

    return (<div>

        <div className={styles.stage_container}>
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
            />
            <button
                onClick={() => {

                    const pixelRatio = data.data.data[0].stages[0].create_types[0].image_requirement.store_width_max/dimensions.width;

                    console.log(data.data.data[0].stages[0].sub_location_settings[0].preview)
                    console.log(data.data.data[0].stages[0].image)
                    const transformer = transformerRef.current;

                    // Hide transformer before saving
                    transformer.nodes([]);
                    transformer.visible(false);
                    transformer.getLayer().batchDraw();

                    let uri = stageRef.current.toDataURL({ pixelRatio: pixelRatio }); // optional: higher resolution

                    const link = document.createElement('a');
                    link.download = 'canvas.png';
                    link.href = uri;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                   setTimeout(()=>{
                       transformer.nodes(['top-left', 'top-right','middle-left','middle-right', 'bottom-left', 'bottom-right',]);
                       transformer.visible(true);
                       transformer.getLayer().batchDraw();
                       transformer.getLayer().batchDraw();

                       // Show image
                       if (imgRef.current) {
                           imgRef.current.src = uri;
                       }
                   },50)
                }}

            >
                Save as PNG
            </button>
            <img src={stage?.url} className={styles.stage_mockup_image} ></img>
            <div  ref={containerRef} style={{position:'absolute',top:`${stage?.preview.top}%`,left:`${stage?.preview.left}%`,width:`${stage.preview.width}%`,height:`${stage.preview.height}%`}}>
                <Stage ref={stageRef}  width={dimensions.width} height={dimensions.height}>
                    <Layer>
                        {image?.img && (
                            <>
                            <KonvaImage
                                image={image?.img}
                                x={0}
                                y={0}
                                width={image?.width}
                                height={image?.height}
                                draggable
                                ref={imageRef}
                            />
                             <Transformer
                                 ref={transformerRef}
                                 rotateEnabled={true}
                                 enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right',]}
                                 boundBoxFunc={(oldBox, newBox) => {
                                        if (newBox.width < 20 || newBox.height < 20) {
                                            return oldBox;
                                        }
                                        return newBox;
                                    }}
                                />
                            </>
                        )}
                    </Layer>
                </Stage>
            </div>

        </div>

    </div>)


// <div
//             ref={containerRef}
//             style={{
//                 width: '50vw',
//                 height: '50vh',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}
//         >

//         </div>


}







