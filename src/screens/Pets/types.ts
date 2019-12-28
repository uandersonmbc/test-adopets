
interface Specie {
    id: number | null
    name: string
}

interface Branch {
    id: number | null
    uuid: string
}

interface BreedPrimary {
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
    custom_code: number | null
    specie_id: number | null
    breed_primary_id: number | null
    price: string
    created_date: string
    status_key: string
    branch_id: number | null
    payment_model_key: string
    sex_key: string
    size_key: string
    age_key: string
    specie: Specie
    branch: Branch
    breed_primary: BreedPrimary
}

/**
 * State types
 */
export interface Pagination {
    limit: number
    offset: number
    pages: number
    page: number
    count: number
}
