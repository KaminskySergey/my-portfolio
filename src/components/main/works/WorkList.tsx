import { ReactNode } from "react"
import WorkCard from "./WorkCard"

interface IWorkList {
}

const workItems =  [
    {
        name: 'GooseTrack',
        link: {
            gitHub: 'https://github.com/KaminskySergey/Team-Project_GooseTrack',
            webSite: 'https://kaminskysergey.github.io/Team-Project_GooseTrack/'
        },
        image: '/gooseTrack'
    },
    {
        name: 'Fimoteka',
        link: {
            gitHub: 'https://github.com/KaminskySergey/Filmoteka',
            webSite: 'https://kaminskysergey.github.io/Filmoteka/'
        },
        image: '/filmoteka'
    },
    {
        name: 'Films',
        link: {
            gitHub: 'https://github.com/KaminskySergey/Films',
            webSite: 'https://kaminskysergey.github.io/Films/'
        },
        image: '/films'
    },
    {
        name: 'Shop',
        link: {
            gitHub: 'https://github.com/KaminskySergey/shop-learn',
            webSite: 'https://shop-learn.vercel.app/'
        },
        image: '/shop'
    },
    {
        name: 'WebStudio',
        link: {
            gitHub: 'https://github.com/KaminskySergey/-goit-markup-hw-08',
            webSite: 'https://kaminskysergey.github.io/-goit-markup-hw-08/'
        },
        image: '/webstudio'
    },
    {
        name: 'Delivery',
        link: {
            gitHub: 'https://github.com/KaminskySergey/food-delivery',
            webSite: 'https://delivery-food-umber.vercel.app/shop'
        },
        image: '/delivery'
    },
    {
        name: 'Gallery',
        link: {
            gitHub: 'https://github.com/KaminskySergey/goit-js-hw-11',
            webSite: 'https://kaminskysergey.github.io/goit-js-hw-11/'
        },
        image: '/gallery'
    },
    
]

export default function WorkList({}: IWorkList) {
    return <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {
            workItems.map(el => (
                <WorkCard key={el.name} items={el}/>
            ))
        }
    </ul>
}
