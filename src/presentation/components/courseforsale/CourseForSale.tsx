import Dinero from 'dinero.js'
import './CourseForSale.scss'

interface CourseForSaleParams {
    name: string,
    description: string,
    tags: Array<string>,
    grades: Array<number>,
    formattedCost?: string,
    purchaseButton: React.ReactNode
}

export const CourseForSale = ({name, description, tags, grades, formattedCost, purchaseButton}: CourseForSaleParams) => {
    return <div className='course-for-sale'>

        <div className='course-details'>
            <div className='course-details__title'>
                <h1> {name} </h1>
            </div>

            <div className='course-details__info'>
                <p>{description}</p>
                <p>Grades: {String(grades)}</p>
                {displayCost(formattedCost)}
            </div>

            <div className='course-details__tag-container'>
                {displayTags(tags)}
            </div>

            {purchaseButton}

        </div>

        <div className='course-for-sale__image'>
            <img src='' />
        </div>

    </div>
}

const displayTags = (tags: Array<string>) => {
    return tags.map((tag) => {
        return <div className='course-details__tag'>{tag}</div>
    })
}

const displayCost = (formattedCost?: string) => {
    if(!formattedCost) return

    return <p>Purchase now for only: <strong>{formattedCost}</strong></p>
}