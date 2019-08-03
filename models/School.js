var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * School Model
 * =============
 */

var School = new keystone.List('School', {
	autokey: { from: 'name', path: 'key', unique: true },
});

School.add({
	name: { type: String, required: true },
	descripcion: { type: String, default: '' },
	regional: { type: Types.Relationship, ref: 'Regional', many: false },
});

School.register();
