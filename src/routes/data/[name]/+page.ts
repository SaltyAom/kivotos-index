import { error, type Load } from '@sveltejs/kit'

import { parseName } from '../../../services/parse'
import millennium from '../../../data/millennium.json'

export const load: Load = ({ params }) => {
	if (!params.name) throw error(400, 'name is required')

	const student = millennium.find((student) => parseName(student.name) === params.name)
	if (!student) throw error(404, 'Student not found')

	return {
		student
	}
}
