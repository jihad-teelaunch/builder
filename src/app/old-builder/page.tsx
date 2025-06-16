'use client'

import styles from "./style.module.css"
import {useState} from "react";
export default function Home() {

    const [file,setFile] = useState()
    const [data,setData] = useState({
        url : 'https://teelaunch.s3.us-east-1.amazonaws.com/blank-images/866/Anvil_WTank_Flat_FRONT_HeatherGrey.jpg',
        width:'38.00',
        height:'47.50',
        left:'30.70',
        top:'31.90'
    })

    const [result] = useState({
        stageGroups: [
            {
                "id": 102,
                "blankId": 83,
                "name": "Front",
                "sort": 0,
                "isActive": 1,
                "createdAt": "2020-10-08T06:44:28.000000Z",
                "updatedAt": "2020-10-24T23:02:23.000000Z",
                "stages": [
                    {
                        "id": 94,
                        "blankStageGroupId": 102,
                        "blankStageLocationId": 1,
                        "overlayImageId": 207,
                        "isMovable": 0,
                        "isRotatable": 0,
                        "isActive": 0,
                        "sort": 0,
                        "createdAt": "2020-10-11T22:13:17.000000Z",
                        "updatedAt": "2020-10-11T22:13:48.000000Z",
                        "isOptional": 0,
                        "upcharge": null,
                        "createTypes": [
                            {
                                "id": 94,
                                "blankStageId": 94,
                                "createTypeId": 1,
                                "createdAt": "2020-10-11T22:14:31.000000Z",
                                "updatedAt": "2020-10-11T22:14:31.000000Z",
                                "imageRequirement": {
                                    "id": 94,
                                    "createTypeStageId": 94,
                                    "storeSizeMin": null,
                                    "storeSizeMax": 104857600,
                                    "storeWidthMin": 2400,
                                    "storeWidthMax": 10000,
                                    "storeHeightMin": 1,
                                    "storeHeightMax": 10000,
                                    "customerSizeMin": null,
                                    "customerSizeMax": null,
                                    "customerWidthMin": null,
                                    "customerWidthMax": null,
                                    "customerHeightMin": null,
                                    "customerHeightMax": null,
                                    "isMovable": 0,
                                    "isRotatable": 0,
                                    "createdAt": "2020-10-11T22:14:31.000000Z",
                                    "updatedAt": "2020-10-11T22:14:31.000000Z",
                                    "storeSizeMinReadable": "0 B",
                                    "storeSizeMaxReadable": "100 MB"
                                },
                                "createType": {
                                    "id": 1,
                                    "name": "Image",
                                    "hasStoreArtwork": 1,
                                    "hasCustomerArtwork": 0,
                                    "sort": 0,
                                    "createdAt": null,
                                    "updatedAt": null
                                },
                                "imageTypes": [
                                    {
                                        "id": 166,
                                        "createTypeStageId": 94,
                                        "artworkOrigin": 2,
                                        "imageTypeId": 1,
                                        "createdAt": "2020-10-11T22:14:31.000000Z",
                                        "updatedAt": "2020-10-11T22:14:31.000000Z",
                                        "imageType": {
                                            "id": 1,
                                            "displayName": "PNG",
                                            "fileExtension": "png",
                                            "mimeType": "image\/png",
                                            "isUploadable": 1,
                                            "isPrintable": 1,
                                            "sort": 0,
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    }
                                ]
                            }
                        ],
                        "image": {
                            "id": 207,
                            "fileName": "template.png",
                            "description": "variant image",
                            "imageTypeId": 2,
                            "fileSize": 21545,
                            "width": 2000,
                            "height": 2000,
                            "createdAt": "2020-10-09T04:02:19.000000Z",
                            "updatedAt": "2020-10-09T04:02:20.000000Z",
                            "fileUrl": "https:\/\/teelaunch-dev.s3.us-east-1.amazonaws.com\/blank-images\/207\/template.png",
                            "imageUrl": "https:\/\/teelaunch-dev.s3.us-east-1.amazonaws.com\/blank-images\/207\/template.png",
                            "thumbUrl": "https:\/\/teelaunch-dev.s3.us-east-1.amazonaws.com\/blank-images\/207\/template-thumb.png"
                        },
                        "location": {
                            "id": 1,
                            "fullName": "Front Shirt",
                            "shortName": "Front",
                            "createdAt": "2020-05-15T23:39:16.000000Z",
                            "updatedAt": "2020-05-15T23:39:16.000000Z"
                        },
                        "subLocationSettings": [
                            {
                                "id": 104,
                                "blankStageId": 94,
                                "blankStageLocationSubId": 1,
                                "vendorKey": null,
                                "vendorValue": null,
                                "createdAt": "2020-10-11T22:14:37.000000Z",
                                "updatedAt": "2020-10-11T22:14:37.000000Z",
                                "preview": {
                                    "id": 105,
                                    "blankVariantId": null,
                                    "blankStageLocationSubSettingId": 104,
                                    "left": "30.70",
                                    "top": "31.90",
                                    "width": "38.00",
                                    "height": "47.50",
                                    "alignVerticalId": null,
                                    "alignHorizontalId": null,
                                    "createdAt": "2020-10-11T22:14:37.000000Z",
                                    "updatedAt": "2021-01-25T05:27:14.000000Z"
                                },
                                "subLocation": {
                                    "id": 1,
                                    "blankStageLocationId": 1,
                                    "code": null,
                                    "name": "Full Print",
                                    "sort": 0,
                                    "createdAt": "2020-05-19T23:14:09.000000Z",
                                    "updatedAt": "2020-05-19T23:14:09.000000Z"
                                },
                                "offsets": [
                                    {
                                        "id": 22,
                                        "blankStageLocationSubOffsetId": 1,
                                        "blankStageLocationSubSettingId": 104,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "0.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:14:54.000000Z",
                                        "updatedAt": "2021-01-25T05:27:14.000000Z",
                                        "subOffset": {
                                            "id": 1,
                                            "name": "Normal",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 29,
                                        "blankStageLocationSubOffsetId": 2,
                                        "blankStageLocationSubSettingId": 104,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "2.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:16:19.000000Z",
                                        "updatedAt": "2021-01-25T05:27:14.000000Z",
                                        "subOffset": {
                                            "id": 2,
                                            "name": "Double",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 30,
                                        "blankStageLocationSubOffsetId": 3,
                                        "blankStageLocationSubSettingId": 104,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "4.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:16:22.000000Z",
                                        "updatedAt": "2021-01-25T05:27:14.000000Z",
                                        "subOffset": {
                                            "id": 3,
                                            "name": "Triple",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    }
                                ]
                            },
                            {
                                "id": 105,
                                "blankStageId": 94,
                                "blankStageLocationSubId": 2,
                                "vendorKey": null,
                                "vendorValue": null,
                                "createdAt": "2020-10-11T22:14:40.000000Z",
                                "updatedAt": "2020-10-11T22:14:40.000000Z",
                                "preview": {
                                    "id": 106,
                                    "blankVariantId": null,
                                    "blankStageLocationSubSettingId": 105,
                                    "left": "35.90",
                                    "top": "31.90",
                                    "width": "28.50",
                                    "height": "35.60",
                                    "alignVerticalId": null,
                                    "alignHorizontalId": null,
                                    "createdAt": "2020-10-11T22:14:40.000000Z",
                                    "updatedAt": "2021-01-25T05:43:55.000000Z"
                                },
                                "subLocation": {
                                    "id": 2,
                                    "blankStageLocationId": 1,
                                    "code": null,
                                    "name": "3\/4 Print",
                                    "sort": 0,
                                    "createdAt": "2020-05-19T23:14:16.000000Z",
                                    "updatedAt": "2020-05-19T23:14:16.000000Z"
                                },
                                "offsets": [
                                    {
                                        "id": 23,
                                        "blankStageLocationSubOffsetId": 1,
                                        "blankStageLocationSubSettingId": 105,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "0.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:14:59.000000Z",
                                        "updatedAt": "2021-01-25T05:43:55.000000Z",
                                        "subOffset": {
                                            "id": 1,
                                            "name": "Normal",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 31,
                                        "blankStageLocationSubOffsetId": 2,
                                        "blankStageLocationSubSettingId": 105,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "2.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:16:27.000000Z",
                                        "updatedAt": "2021-01-25T05:43:55.000000Z",
                                        "subOffset": {
                                            "id": 2,
                                            "name": "Double",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 32,
                                        "blankStageLocationSubOffsetId": 3,
                                        "blankStageLocationSubSettingId": 105,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "4.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:16:30.000000Z",
                                        "updatedAt": "2021-01-25T05:43:55.000000Z",
                                        "subOffset": {
                                            "id": 3,
                                            "name": "Triple",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    }
                                ]
                            },
                            {
                                "id": 106,
                                "blankStageId": 94,
                                "blankStageLocationSubId": 3,
                                "vendorKey": null,
                                "vendorValue": null,
                                "createdAt": "2020-10-11T22:14:42.000000Z",
                                "updatedAt": "2020-10-11T22:14:42.000000Z",
                                "preview": {
                                    "id": 107,
                                    "blankVariantId": null,
                                    "blankStageLocationSubSettingId": 106,
                                    "left": "40.10",
                                    "top": "31.90",
                                    "width": "19.10",
                                    "height": "23.80",
                                    "alignVerticalId": null,
                                    "alignHorizontalId": null,
                                    "createdAt": "2020-10-11T22:14:42.000000Z",
                                    "updatedAt": "2021-01-25T05:44:01.000000Z"
                                },
                                "subLocation": {
                                    "id": 3,
                                    "blankStageLocationId": 1,
                                    "code": null,
                                    "name": "Half Print",
                                    "sort": 0,
                                    "createdAt": "2020-05-19T23:14:24.000000Z",
                                    "updatedAt": "2020-05-19T23:14:24.000000Z"
                                },
                                "offsets": [
                                    {
                                        "id": 24,
                                        "blankStageLocationSubOffsetId": 1,
                                        "blankStageLocationSubSettingId": 106,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "0.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:15:03.000000Z",
                                        "updatedAt": "2021-01-25T05:44:01.000000Z",
                                        "subOffset": {
                                            "id": 1,
                                            "name": "Normal",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 33,
                                        "blankStageLocationSubOffsetId": 2,
                                        "blankStageLocationSubSettingId": 106,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "2.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:16:35.000000Z",
                                        "updatedAt": "2021-01-25T05:44:01.000000Z",
                                        "subOffset": {
                                            "id": 2,
                                            "name": "Double",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 34,
                                        "blankStageLocationSubOffsetId": 3,
                                        "blankStageLocationSubSettingId": 106,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "4.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-11T22:16:37.000000Z",
                                        "updatedAt": "2021-01-25T05:44:01.000000Z",
                                        "subOffset": {
                                            "id": 3,
                                            "name": "Triple",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    }
                                ]
                            },
                            {
                                "id": 107,
                                "blankStageId": 94,
                                "blankStageLocationSubId": 4,
                                "vendorKey": null,
                                "vendorValue": null,
                                "createdAt": "2020-10-11T22:14:44.000000Z",
                                "updatedAt": "2020-10-11T22:14:44.000000Z",
                                "preview": {
                                    "id": 108,
                                    "blankVariantId": null,
                                    "blankStageLocationSubSettingId": 107,
                                    "left": "56.00",
                                    "top": "31.90",
                                    "width": "12.70",
                                    "height": "12.70",
                                    "alignVerticalId": null,
                                    "alignHorizontalId": null,
                                    "createdAt": "2020-10-11T22:14:44.000000Z",
                                    "updatedAt": "2020-11-03T16:59:37.000000Z"
                                },
                                "subLocation": {
                                    "id": 4,
                                    "blankStageLocationId": 1,
                                    "code": null,
                                    "name": "Left Chest",
                                    "sort": 0,
                                    "createdAt": "2020-05-19T23:14:30.000000Z",
                                    "updatedAt": "2020-05-19T23:14:30.000000Z"
                                },
                                "offsets": []
                            },
                            {
                                "id": 108,
                                "blankStageId": 94,
                                "blankStageLocationSubId": 5,
                                "vendorKey": null,
                                "vendorValue": null,
                                "createdAt": "2020-10-11T22:14:46.000000Z",
                                "updatedAt": "2020-10-11T22:14:46.000000Z",
                                "preview": {
                                    "id": 109,
                                    "blankVariantId": null,
                                    "blankStageLocationSubSettingId": 108,
                                    "left": "30.70",
                                    "top": "31.90",
                                    "width": "12.70",
                                    "height": "12.70",
                                    "alignVerticalId": null,
                                    "alignHorizontalId": null,
                                    "createdAt": "2020-10-11T22:14:46.000000Z",
                                    "updatedAt": "2020-11-03T17:00:10.000000Z"
                                },
                                "subLocation": {
                                    "id": 5,
                                    "blankStageLocationId": 1,
                                    "code": null,
                                    "name": "Right Chest",
                                    "sort": 0,
                                    "createdAt": "2020-05-19T23:14:36.000000Z",
                                    "updatedAt": "2020-05-19T23:14:36.000000Z"
                                },
                                "offsets": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 139,
                "blankId": 83,
                "name": "Back",
                "sort": 0,
                "isActive": 1,
                "createdAt": "2020-10-24T23:02:27.000000Z",
                "updatedAt": "2020-10-24T23:02:27.000000Z",
                "stages": [
                    {
                        "id": 129,
                        "blankStageGroupId": 139,
                        "blankStageLocationId": 3,
                        "overlayImageId": 195,
                        "isMovable": 0,
                        "isRotatable": 0,
                        "isActive": 0,
                        "sort": 0,
                        "createdAt": "2020-10-24T23:02:35.000000Z",
                        "updatedAt": "2020-11-30T05:54:00.000000Z",
                        "isOptional": 1,
                        "upcharge": null,
                        "createTypes": [
                            {
                                "id": 128,
                                "blankStageId": 129,
                                "createTypeId": 1,
                                "createdAt": "2020-10-24T23:02:59.000000Z",
                                "updatedAt": "2020-10-24T23:02:59.000000Z",
                                "imageRequirement": {
                                    "id": 128,
                                    "createTypeStageId": 128,
                                    "storeSizeMin": null,
                                    "storeSizeMax": null,
                                    "storeWidthMin": 2400,
                                    "storeWidthMax": 10000,
                                    "storeHeightMin": 1,
                                    "storeHeightMax": 100000,
                                    "customerSizeMin": null,
                                    "customerSizeMax": null,
                                    "customerWidthMin": null,
                                    "customerWidthMax": null,
                                    "customerHeightMin": null,
                                    "customerHeightMax": null,
                                    "isMovable": 0,
                                    "isRotatable": 0,
                                    "createdAt": "2020-10-24T23:02:59.000000Z",
                                    "updatedAt": "2020-10-24T23:02:59.000000Z",
                                    "storeSizeMinReadable": "0 B",
                                    "storeSizeMaxReadable": "0 B"
                                },
                                "createType": {
                                    "id": 1,
                                    "name": "Image",
                                    "hasStoreArtwork": 1,
                                    "hasCustomerArtwork": 0,
                                    "sort": 0,
                                    "createdAt": null,
                                    "updatedAt": null
                                },
                                "imageTypes": [
                                    {
                                        "id": 468,
                                        "createTypeStageId": 128,
                                        "artworkOrigin": 2,
                                        "imageTypeId": 1,
                                        "createdAt": "2024-12-16T13:38:11.000000Z",
                                        "updatedAt": "2024-12-16T13:38:11.000000Z",
                                        "imageType": {
                                            "id": 1,
                                            "displayName": "PNG",
                                            "fileExtension": "png",
                                            "mimeType": "image\/png",
                                            "isUploadable": 1,
                                            "isPrintable": 1,
                                            "sort": 0,
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    }
                                ]
                            }
                        ],
                        "image": {
                            "id": 195,
                            "fileName": "shirt.png",
                            "description": "variant image",
                            "imageTypeId": 2,
                            "fileSize": 46403,
                            "width": 2400,
                            "height": 3600,
                            "createdAt": "2020-09-11T00:03:02.000000Z",
                            "updatedAt": "2020-09-11T00:03:03.000000Z",
                            "fileUrl": "https:\/\/teelaunch-dev.s3.us-east-1.amazonaws.com\/blank-images\/195\/shirt.png",
                            "imageUrl": "https:\/\/teelaunch-dev.s3.us-east-1.amazonaws.com\/blank-images\/195\/shirt.png",
                            "thumbUrl": "https:\/\/teelaunch-dev.s3.us-east-1.amazonaws.com\/blank-images\/195\/shirt-thumb.png"
                        },
                        "location": {
                            "id": 3,
                            "fullName": "Back Shirt",
                            "shortName": "Back Shirt",
                            "createdAt": "2020-05-19T23:14:49.000000Z",
                            "updatedAt": "2020-05-19T23:14:49.000000Z"
                        },
                        "subLocationSettings": [
                            {
                                "id": 221,
                                "blankStageId": 129,
                                "blankStageLocationSubId": 6,
                                "vendorKey": null,
                                "vendorValue": null,
                                "createdAt": "2020-10-24T23:04:57.000000Z",
                                "updatedAt": "2020-10-24T23:04:57.000000Z",
                                "preview": {
                                    "id": 222,
                                    "blankVariantId": null,
                                    "blankStageLocationSubSettingId": 221,
                                    "left": "31.40",
                                    "top": "20.00",
                                    "width": "38.00",
                                    "height": "47.50",
                                    "alignVerticalId": null,
                                    "alignHorizontalId": null,
                                    "createdAt": "2020-10-24T23:04:57.000000Z",
                                    "updatedAt": "2021-01-25T05:27:36.000000Z"
                                },
                                "subLocation": {
                                    "id": 6,
                                    "blankStageLocationId": 3,
                                    "code": null,
                                    "name": "Full Print",
                                    "sort": 0,
                                    "createdAt": "2020-05-19T23:14:57.000000Z",
                                    "updatedAt": "2020-05-19T23:14:57.000000Z"
                                },
                                "offsets": [
                                    {
                                        "id": 218,
                                        "blankStageLocationSubOffsetId": 1,
                                        "blankStageLocationSubSettingId": 221,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "0.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-24T23:05:13.000000Z",
                                        "updatedAt": "2021-01-25T05:27:36.000000Z",
                                        "subOffset": {
                                            "id": 1,
                                            "name": "Normal",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 219,
                                        "blankStageLocationSubOffsetId": 2,
                                        "blankStageLocationSubSettingId": 221,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "2.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-24T23:05:16.000000Z",
                                        "updatedAt": "2021-01-25T05:27:36.000000Z",
                                        "subOffset": {
                                            "id": 2,
                                            "name": "Double",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 220,
                                        "blankStageLocationSubOffsetId": 3,
                                        "blankStageLocationSubSettingId": 221,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "4.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-24T23:05:19.000000Z",
                                        "updatedAt": "2021-01-25T05:27:36.000000Z",
                                        "subOffset": {
                                            "id": 3,
                                            "name": "Triple",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    }
                                ]
                            },
                            {
                                "id": 222,
                                "blankStageId": 129,
                                "blankStageLocationSubId": 7,
                                "vendorKey": null,
                                "vendorValue": null,
                                "createdAt": "2020-10-24T23:04:59.000000Z",
                                "updatedAt": "2020-10-24T23:04:59.000000Z",
                                "preview": {
                                    "id": 223,
                                    "blankVariantId": null,
                                    "blankStageLocationSubSettingId": 222,
                                    "left": "40.90",
                                    "top": "20.00",
                                    "width": "19.10",
                                    "height": "23.80",
                                    "alignVerticalId": null,
                                    "alignHorizontalId": null,
                                    "createdAt": "2020-10-24T23:04:59.000000Z",
                                    "updatedAt": "2021-01-25T05:46:46.000000Z"
                                },
                                "subLocation": {
                                    "id": 7,
                                    "blankStageLocationId": 3,
                                    "code": null,
                                    "name": "Half Print",
                                    "sort": 0,
                                    "createdAt": "2020-05-19T23:16:34.000000Z",
                                    "updatedAt": "2020-05-19T23:16:34.000000Z"
                                },
                                "offsets": [
                                    {
                                        "id": 221,
                                        "blankStageLocationSubOffsetId": 1,
                                        "blankStageLocationSubSettingId": 222,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "0.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-24T23:05:24.000000Z",
                                        "updatedAt": "2021-01-25T05:46:46.000000Z",
                                        "subOffset": {
                                            "id": 1,
                                            "name": "Normal",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 222,
                                        "blankStageLocationSubOffsetId": 2,
                                        "blankStageLocationSubSettingId": 222,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "2.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-24T23:05:27.000000Z",
                                        "updatedAt": "2021-01-25T05:46:46.000000Z",
                                        "subOffset": {
                                            "id": 2,
                                            "name": "Double",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    },
                                    {
                                        "id": 223,
                                        "blankStageLocationSubOffsetId": 3,
                                        "blankStageLocationSubSettingId": 222,
                                        "leftOffsetPercent": "0.00",
                                        "topOffsetPercent": "4.00",
                                        "vendorKey": null,
                                        "vendorValue": null,
                                        "createdAt": "2020-10-24T23:05:30.000000Z",
                                        "updatedAt": "2021-01-25T05:46:46.000000Z",
                                        "subOffset": {
                                            "id": 3,
                                            "name": "Triple",
                                            "createdAt": null,
                                            "updatedAt": null
                                        }
                                    }
                                ]
                            },
                            {
                                "id": 223,
                                "blankStageId": 129,
                                "blankStageLocationSubId": 8,
                                "vendorKey": null,
                                "vendorValue": null,
                                "createdAt": "2020-10-24T23:05:02.000000Z",
                                "updatedAt": "2020-10-24T23:05:02.000000Z",
                                "preview": {
                                    "id": 224,
                                    "blankVariantId": null,
                                    "blankStageLocationSubSettingId": 223,
                                    "left": "44.20",
                                    "top": "20.00",
                                    "width": "12.70",
                                    "height": "12.70",
                                    "alignVerticalId": null,
                                    "alignHorizontalId": null,
                                    "createdAt": "2020-10-24T23:05:02.000000Z",
                                    "updatedAt": "2021-01-25T05:46:53.000000Z"
                                },
                                "subLocation": {
                                    "id": 8,
                                    "blankStageLocationId": 3,
                                    "code": null,
                                    "name": "Top Center",
                                    "sort": 0,
                                    "createdAt": "2020-05-19T23:16:40.000000Z",
                                    "updatedAt": "2020-05-19T23:16:40.000000Z"
                                },
                                "offsets": []
                            }
                        ]
                    }
                ]
            }
        ]
    })

   const clickOnUploadButton = (event) => {
       const file = event.target.files[0]
       if (file) {
           const reader = new FileReader();
           reader.onloadend = () => {
               // @ts-ignore
               setFile(reader.result); // base64 image string
           };

           reader.readAsDataURL(file); // read file as base64 string
       }
   }

   const onLocationSettingPressed = (location) => {

        console.log(location)
        setData({...data,
            width: `${location.preview.width}`,
            height: `${location.preview.height}`,
            top: `${location.preview.top}`,
            left: `${location.preview.left}`
        })
   }

   const onOffsetClicked = (location,offset)=>{

       setData({...data,
           width: `${location.preview.width}`,
           height: `${location.preview.height}`,
           top: `${parseInt(location.preview.top) + parseInt(offset.topOffsetPercent)}`,
           left: `${parseInt(location.preview.left) + parseInt(offset.leftOffsetPercent)}`
       })
   }

  return (
   <div className={styles.container}>
       <div className={styles.option_wrapper}>
           {
               result?.stageGroups.map((stageGroup)=>{
                   return <div className={styles.subLocation}>
                       <div>{stageGroup.name}</div>
                       <div>{stageGroup.stages?.map((stage)=>{
                           return <div className={styles.subLocationSettings}>
                               {stage.subLocationSettings?.map((settings)=>{
                                   return <div>
                                       <button className={styles.basic_btn} onClick={()=>{onLocationSettingPressed(settings)}} >{settings?.subLocation?.name}</button>
                                       <div className={styles.offset_wrapper}>
                                           {
                                               settings?.offsets.map((offset)=>{ return <div>
                                                   <button onClick={()=>{
                                                       onOffsetClicked(settings,offset)
                                                   }} className={styles.offset_btn}>
                                                       {offset?.subOffset.name}
                                                   </button>
                                               </div>})
                                           }
                                       </div>
                                   </div>
                               })}
                           </div>
                       })}</div></div>
               })
           }
       </div>
       <div className={styles.mockup_container}>
           <div className={styles.mockup_container_wrapper}>
               <div className={styles.image_container_builder}>
                   <img className={styles.upload_button_input_container} src={data.url}/>
                   <div className={styles.upload_button_container} style={{width:data.width +"%",height:data.height+"%",left:data.left+"%",top:data.top+"%"}}>
                       <div className={styles.upload_button} >
                           <img className={styles.selected_image} src={file}  ></img>
                           <label>  Your Design
                               <input type="file" accept="image/*" style={{   width:'100%',height:'100%'}} className={styles.upload_input} onClick={clickOnUploadButton}></input>
                           </label>
                           <div>+</div>
                       </div>
                   </div>

               </div>
           </div>

       </div>
   </div>
  );
}
