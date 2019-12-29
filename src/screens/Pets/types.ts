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
