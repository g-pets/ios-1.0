import { createWebHistory, createRouter } from "vue-router"

// Layers
const loadingLayer = () => import('~/layers/loadingLayer.vue')
const entryLayer = () => import('~/layers/entryLayer.vue')

// Views
const lockScreen = () => import('~/views/lockScreen.vue')
const homeScreen = () => import('~/views/homeScreen.vue')




// Clock App
const clockApp = () => import('~/apps/clockApp/clockApp.vue')
const clockApp_worldClock = () => import('~/apps/clockApp/worldClock.vue')
const clockApp_alarm = () => import('~/apps/clockApp/alarm.vue')
const clockApp_stopwatch = () => import('~/apps/clockApp/stopwatch.vue')
const clockApp_timer = () => import('~/apps/clockApp/timer.vue')

// Phone App
const phoneApp = () => import('~/apps/phoneApp/phoneApp.vue')
const phoneApp_favorites = () => import('~/apps/phoneApp/favorites.vue')
const phoneApp_recents = () => import('~/apps/phoneApp/recents.vue')
const phoneApp_contacts = () => import('~/apps/phoneApp/contacts.vue')
const phoneApp_contact = () => import('~/apps/phoneApp/contact.vue')
const phoneApp_keypad = () => import('~/apps/phoneApp/keypad.vue')
const phoneApp_calling = () => import('~/apps/phoneApp/calling.vue')
const phoneApp_voicemail = () => import('~/apps/phoneApp/voicemail.vue')

// Text App
const textApp = () => import('~/apps/textApp/textApp.vue')
const textApp_conversations = () => import('~/apps/textApp/conversations.vue')
const textApp_conversation = () => import('~/apps/textApp/conversation.vue')




// Routes
const routes = [
	{
		path: "/loading/",
		name: "loadingScreen",
		component: loadingLayer
	}, {
		path: "/",
		component: entryLayer,
		children: [
			{
				path: "/locked/",
				name: "lockScreen",
				component: lockScreen
			},
			{
				path: "/",
				name: "homeScreen",
				component: homeScreen
			},
			// Clock App
			{
				path: "/apps/clock/",
				component: clockApp,
				children: [
					{
						path: "world-clock/",
						name: "clockApp_worldClock",
						component: clockApp_worldClock,
					}, {
						path: "alarm/",
						name: "clockApp_alarm",
						component: clockApp_alarm,
					}, {
						path: "stopwatch/",
						name: "clockApp_stopwatch",
						component: clockApp_stopwatch,
					}, {
						path: "timer/",
						name: "clockApp_timer",
						component: clockApp_timer,
					}, {
						path: "",
						redirect: { name: "clockApp_worldClock" },
					}
				]
			},
			// Phone App
			{
				path: "/apps/phone/",
				component: phoneApp,
				children: [
					{
						path: "favorites/",
						name: "phoneApp_favorites",
						component: phoneApp_favorites,
					}, {
						path: "recents/",
						name: "phoneApp_recents",
						component: phoneApp_recents,
					}, {
						path: "contacts/",
						name: "phoneApp_contacts",
						component: phoneApp_contacts,
					}, {
						path: "contacts/:id/",
						name: "phoneApp_contact",
						component: phoneApp_contact,
					}, {
						path: "keypad/",
						name: "phoneApp_keypad",
						component: phoneApp_keypad,
					}, {
						path: "calling/:number/",
						name: "phoneApp_calling",
						component: phoneApp_calling,
					}, {
						path: "voicemail/",
						name: "phoneApp_voicemail",
						component: phoneApp_voicemail,
					}, {
						path: "",
						redirect: { name: "phoneApp_keypad" },
					}
				]
			},
			// Text App
			{
				path: "/apps/text/",
				component: textApp,
				children: [
					{
						path: "conversations/",
						name: "textApp_conversations",
						component: textApp_conversations,
						meta: {title: "Messages"}
					}, {
						path: "conversations/:id/",
						name: "textApp_conversation",
						component: textApp_conversation,
						meta: {title: "Conversation"}
					}, {
						path: "",
						redirect: { name: "textApp_conversations" },
					}
				]
			}
		]
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: { name: "lockScreen" }
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(async (to, from, next) => {
	let installed = await localStorage.getItem('installed')
	let unlocked = await localStorage.getItem('unlocked')
	if (to.name !== 'loadingScreen' && !installed) next({ name: 'loadingScreen' })
	if (to.name !== 'lockScreen' && !unlocked) next({ name: 'lockScreen' })
	else next()
})

export default router