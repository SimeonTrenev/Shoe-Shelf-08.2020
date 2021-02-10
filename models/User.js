module.exports = (mongoose) => {

    const { Schema, model: Model } = mongoose
    const { String, ObjectId } = Schema.Types;

    const userSchema = new Schema({

        email: {
            type: String,
            required: true,
            unique: true,
        },

        fullName: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        offersBought: [
            {
                type: ObjectId,
                ref: "Shoe"
            }
        ]

    });

    return Model('User', userSchema)
};