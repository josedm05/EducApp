var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Teacher Model
 * =============
 */

var Teacher = new keystone.List('Teacher', {
	//map: { name: 'name' },
	autokey: { from: '_id', path: 'key', unique: false },
});

Teacher.add({
	name: { type: String, required: true },
	cedula: { type: String, unique: true },
	telefono: { type: String },
	correo: { type: String },
	description: { type: String, default: '' },
	location: { type: Types.Location, enableMapsAPI: true },
	images: { type: Types.CloudinaryImages },
	subjects: { type: Types.Relationship, ref: 'Subject', many: true },
});

Teacher.defaultColumns = 'name, cedula|20%, telefono|20%, correo|20%';

Teacher.register();
