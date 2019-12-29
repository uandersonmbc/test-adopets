export const request = {
    search: {
        _fields: [
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
        specie: {
            with: {
                _fields: [
                    "id",
                    "name"
                ]
            }
        }
    },
    options: {
        page: 1,
        limit: 5,
        sort: []
    }
}
