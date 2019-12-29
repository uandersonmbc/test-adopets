/**
 * Data Specie
 */
interface Specie {
    id: number | null
    name: string
}

/**
 * Data types
 */
export interface Pet {
    id: number
    name: string
    uuid: string
    specie_id: number | null
    price: string
    created_date: string
    status_key: string
    payment_model_key: string
    sex_key: string
    size_key: string
    age_key: string
    specie: Specie
}

/**
 * State types
 */
export interface PetsState {
    count: number
    result: Pet[]
}

/*

{
    "search": {
        "_fields": [
           	"id",
            "uuid",
            "name",
            "specie_id",
            "price",
            "created_date",
            "status_key",
            "payment_model_key",
            "sex_key",
            "size_key",
            "age_key"
        ],
        "specie": {
            "with": {
                "_fields": [
                    "id",
                    "name"
                ]
            }
        }
    },
    "options": {
        "page": 1,
        "limit": 5,
        "sort": ["name"]
    }
}

*/
