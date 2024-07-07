import Images from '../Images'
import VolunteerRole from '../interfaces/VolunteerRole'

const volunteerRoles: VolunteerRole[] = [
	{
		title: 'Обновлять базу данных',
		description:
			'Помогайте с записью информации о питомцах в приютах, чтобы каждый из них мог быть найден и получил заслуженный дом.',
		imageUrl: Images.features_paw,
	},
	{
		title: 'Социальные сети',
		description:
			'Поддерживайте наши социальные сети, чтобы больше людей узнали о нашей миссии и стали частью изменений в жизни животных.',
		imageUrl: Images.features_paw,
	},
	{
		title: 'Финансовая помощь',
		description:
			'Пожертвуйте финансовую помощь. Все средства пойдут непосредственно в приюты, обеспечивая заботу о животных.',
		imageUrl: Images.features_paw,
	},
]

export default volunteerRoles
