import { generateId } from './../../utils/generateId';
import { setTime } from "../../utils/time"



export const messages = [
    {   
        id: generateId(),
        userImgLink: '../../../../../public/images/image2.png',
        name: 'Bernard Desmond',
        role: 'Frontend Developer',
        phoneNumber: '08102228633',
        email: 'bernarddesmond16@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image2.png',
            senderName: 'Bernard Desmond',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image1.png',
        name: 'Kafilat Adewunmi',
        role: 'Admin',
        phoneNumber: '08067466377',
        email: 'kafilatadewumi61@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image1.png',
            senderName: 'Kafilat Adewunmi',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image3.png',
        name: 'Tosin Lasisi',
        role: 'UI/UX Designer',
        phoneNumber: '08055773889',
        email: 'tosinlasisi@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image3.png',
            senderName: 'Tosin Lasisi',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image4.png',
        name: 'Jalasem',
        role: 'CEO/CTO',
        phoneNumber: '08084746378',
        email: 'kgastar@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image4.png',
            senderName: 'Jalasem',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image5.png',
        name: 'Sofiya Bakare',
        role: 'UI/UX Designer',
        phoneNumber: '08083746338',
        email: 'sofiyatbakre@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image5.png',
            senderName: 'Sofiya Bakare',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image2.png',
        name: 'Bernard Desmond',
        role: 'Frontend Developer',
        phoneNumber: '08102228633',
        email: 'bernarddesmond16@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image2.png',
            senderName: 'Bernard Desmond',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image1.png',
        name: 'Kafilat Adewunmi',
        role: 'Admin',
        phoneNumber: '08067466377',
        email: 'kafilatadewumi61@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image1.png',
            senderName: 'Kafilat Adewunmi',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image3.png',
        name: 'Tosin Lasisi',
        role: 'UI/UX Designer',
        phoneNumber: '08055773889',
        email: 'tosinlasisi@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image3.png',
            senderName: 'Tosin Lasisi',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image4.png',
        name: 'Jalasem',
        role: 'CEO/CTO',
        phoneNumber: '08084746378',
        email: 'kgastar@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image4.png',
            senderName: 'Jalasem',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
    {
        id: generateId(),
        userImgLink: '../../../../../public/images/image5.png',
        name: 'Sofiya Bakare',
        role: 'UI/UX Designer',
        phoneNumber: '08083746338',
        email: 'sofiyatbakre@gmail.com',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        message: [{
            senderImg: '../../../../../public/images/image5.png',
            senderName: 'Sofiya Bakare',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        userStatus: {
            online: true,
            away: false
        }
    },
]
   
   

export const groupMessages = [
    {
        id: generateId(),
        groupImgLink: '',
        name: 'CV Developer',
        description: 'Description goes here',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        members: messages,
        message: [{
            senderImg: '../../../../../public/images/image5.png',
            senderName: 'Sofiya Bakare',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        messageCategory: 'group'
    },
    {
        id: generateId(),
        groupImgLink: '../../../../../public/images/image2.png',
        name: 'Codevillage HQ',
        description: 'This is Codevillage HQ Space',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        members: messages,
        message: [{
            senderImg: '../../../../../public/images/image5.png',
            senderName: 'Sofiya Bakare',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: false,
        messageCategory: 'group'
    },
    {
        id: generateId(),
        groupImgLink: '',
        name: 'CV Developer',
        description: 'This is Codevillage Developer Space',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        members: messages,
        message: [{
            senderImg: '../../../../../public/images/image5.png',
            senderName: 'Sofiya Bakare',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        messageCategory: 'group'
    },
    {
        id: generateId(),
        groupImgLink: '../../../../../public/images/image2.png',
        name: 'Codevillage HQ',
        description: 'Description goes here',
        dmSnippet: 'Good morning sola...',
        time: setTime(),
        members: messages,
        message: [{
            senderImg: '../../../../../public/images/image5.png',
            senderName: 'Sofiya Bakare',
            message: 'Hello Kaffy',
            recievedTime: setTime(),
        }],
        read: true,
        messageCategory: 'group'

    },
]