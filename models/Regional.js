var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Regional Model
 * =============
 */

var Regional = new keystone.List('Regional', {
	autokey: { from: 'nombre', path: 'key', unique: true },
});

Regional.add({
	name: { type: String, required: true },
	description: { type: String, default: '' },
	createDate: { type: Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

Regional.relationship({ ref: 'School', path: 'schools', refPath: 'regional' });

Regional.register();
