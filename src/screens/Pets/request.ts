export const request = {
    search: {
        _fields: [
            "id",
            "uuid",
            "custom_code",
            "name",
            "specie_id",
            "breed_primary_id",
            "price",
            "created_date",
            "status_key",
            "branch_id",
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
        },
        breed_primary: {
            with: {
                _fields: [
                    "id",
                    "name"
                ]
            }
        },
        branch: {
            with: {
                uuid: "ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff",
                _fields: [
                    "id",
                    "uuid"
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
