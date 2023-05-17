import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
	email: {
		type: String,
		unique: [true, "Email ja existente!"],
		required: [true, "Email é necessário!"],
	},
	username: {
		type: String,
		required: [true, "Usuario é necessário"],
		match: [
			/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zÀ-ÿ-Z0-9._]+(?<![_.])$/,
			"Usuário inválido, deve conter entre 8-20 caracteres alfanuméricos e ser único",
		],
	},
	image: {
		type: String,
	},
});

const User = models.User || model("User", UserSchema);

export default User;
