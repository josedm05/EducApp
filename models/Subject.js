var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Subject Model
 * =============
 */

var Subject = new keystone.List('Subject', {
	autokey: { from: 'nombre', path: 'key', unique: true },
});

Subject.add({
	name: { type: String, required: true },
	description: { type: String, default: '' },
	createDate: { type: Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

Subject.relationship({ ref: 'Teacher', path: 'teachers', refPath: 'subjects' });

Subject.register();
