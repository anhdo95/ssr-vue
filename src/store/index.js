import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore() {
  return new Vuex.Store({
    state() {
      return {
        posts: []
      }
    },

    mutations: {
      setPosts(state, posts) {
        state.posts = posts
      }
    },

    actions: {
      fetchPosts({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const posts = [
              {
                "id": "5eba1ead0a92320011c472d1",
                "userId": 342,
                "title": "Lorem ipsum as qss",
                "createdAt": "2020-05-12T03:57:33.300Z",
                "updatedAt": "2020-05-12T03:57:33.300Z",
                "shareUrl": "http://app-dev.superfanz.co/social/posts/share/5eba1ead0a92320011c472d1",
                "user": {
                  "id": 342,
                  "avatar": "https://dtjkoshajdq37.cloudfront.net/512x512/images/342_691f79f7-5d66-42a6-8b4d-ac18577c37b8.png",
                  "name": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  "username": "anhdo",
                  "type": "CREATOR",
                  "creatorLevel": "SUPERCREATOR",
                  "isStaff": false,
                  "badges": [
                    {
                      "id": 58615,
                      "userId": 342,
                      "type": "STAR_1",
                      "month": "2020-04"
                    }
                  ]
                }
              },
              {
                "id": "5eba1dd60a92320011c472d0",
                "userId": 342,
                "title": "d321321321 Lorem sip",
                "createdAt": "2020-05-12T03:53:58.248Z",
                "updatedAt": "2020-05-12T04:00:00.355Z",
                "shareUrl": "http://app-dev.superfanz.co/social/posts/share/5eba1dd60a92320011c472d0",
                "user": {
                  "id": 342,
                  "avatar": "https://dtjkoshajdq37.cloudfront.net/512x512/images/342_691f79f7-5d66-42a6-8b4d-ac18577c37b8.png",
                  "name": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  "username": "anhdo",
                  "type": "CREATOR",
                  "creatorLevel": "SUPERCREATOR",
                  "isStaff": false,
                  "badges": [
                    {
                      "id": 58615,
                      "userId": 342,
                      "type": "STAR_1",
                      "month": "2020-04"
                    }
                  ]
                }
              },
              {
                "id": "5eba1bd50a92320011c472cf",
                "userId": 342,
                "title": "An awesome title",
                "createdAt": "2020-05-12T03:45:25.254Z",
                "updatedAt": "2020-05-12T03:53:00.486Z",
                "shareUrl": "http://app-dev.superfanz.co/social/posts/share/5eba1bd50a92320011c472cf",
                "tiers": [
                  {
                    "id": 33,
                    "userId": 342,
                    "title": "543",
                    "description": "34534",
                    "image": "https://dtjkoshajdq37.cloudfront.net/100x100/images/342_2b72b478-f33a-4d9c-9f5f-c12753d3d5e6.png",
                    "price": 35,
                    "currency": "THB",
                    "limit": 10,
                    "purchased": 3,
                    "purchaseType": "PACKAGE",
                    "createdAt": "2020-01-22T02:24:01.777Z",
                    "updatedAt": "2020-01-22T02:24:01.777Z",
                    "isSoldOut": false
                  },
                  {
                    "id": 51,
                    "userId": 342,
                    "title": "43432",
                    "description": "3143",
                    "image": "https://dtjkoshajdq37.cloudfront.net/100x100/images/342_2c94a7e3-55a9-4511-a397-57469377bae8.png",
                    "price": 243000,
                    "currency": "VND",
                    "limit": 10,
                    "purchased": 0,
                    "purchaseType": "PACKAGE",
                    "createdAt": "2020-04-07T09:22:24.606Z",
                    "updatedAt": "2020-04-07T09:22:24.606Z",
                    "isSoldOut": false
                  },
                  {
                    "id": 53,
                    "userId": 342,
                    "title": "432432",
                    "description": "432432",
                    "image": "https://dtjkoshajdq37.cloudfront.net/100x100/images/342_869d8874-b06c-4dea-a82c-9c6c70033a3a.jpg",
                    "price": 23000,
                    "currency": "VND",
                    "limit": 0,
                    "purchased": 0,
                    "purchaseType": "PACKAGE",
                    "createdAt": "2020-04-07T09:23:07.330Z",
                    "updatedAt": "2020-04-07T09:23:07.330Z",
                    "isSoldOut": false
                  },
                  {
                    "id": 54,
                    "userId": 342,
                    "title": "342",
                    "description": "432",
                    "image": "https://dtjkoshajdq37.cloudfront.net/100x100/images/342_d7e48cab-7f57-4144-b67c-d4985e4058a3.jpg",
                    "price": 23000,
                    "currency": "VND",
                    "limit": 0,
                    "purchased": 0,
                    "purchaseType": "PACKAGE",
                    "createdAt": "2020-04-07T09:23:17.157Z",
                    "updatedAt": "2020-04-07T09:23:17.157Z",
                    "isSoldOut": false
                  },
                  {
                    "id": 41,
                    "userId": 342,
                    "title": "UnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUn",
                    "description": "Lorem ipsum ...",
                    "image": "https://dtjkoshajdq37.cloudfront.net/100x100/images/342_9b1185fe-5beb-4d60-8291-8830155e21b6.jpg",
                    "price": 23000,
                    "currency": "VND",
                    "limit": 0,
                    "purchased": 0,
                    "purchaseType": "PACKAGE",
                    "createdAt": "2020-03-06T07:31:53.454Z",
                    "updatedAt": "2020-03-27T08:35:33.912Z",
                    "isSoldOut": false
                  },
                  {
                    "id": 48,
                    "userId": 342,
                    "title": "Croppable Images",
                    "description": "Lorem",
                    "image": "https://dtjkoshajdq37.cloudfront.net/100x100/images/342_0414ee0b-a738-498c-9eaa-51413e28c0c9.jpg",
                    "price": 23000,
                    "currency": "VND",
                    "limit": 0,
                    "purchased": 3,
                    "purchaseType": "PACKAGE",
                    "createdAt": "2020-03-24T03:47:05.321Z",
                    "updatedAt": "2020-03-24T03:47:05.321Z",
                    "isSoldOut": false
                  },
                  {
                    "id": 42,
                    "userId": 342,
                    "title": "434324324",
                    "description": "423432432432",
                    "image": null,
                    "price": 23000,
                    "currency": "VND",
                    "limit": 1,
                    "purchased": 1,
                    "purchaseType": "PACKAGE",
                    "createdAt": "2020-03-06T09:27:35.193Z",
                    "updatedAt": "2020-03-06T09:27:35.193Z",
                    "isSoldOut": false
                  },
                  {
                    "id": 50,
                    "userId": 342,
                    "title": "UnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUn",
                    "description": "UnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimitedtiersUnlimi",
                    "image": "https://dtjkoshajdq37.cloudfront.net/100x100/images/342_7f6ea462-d52c-4030-b4b3-0b390046aca7.jpg",
                    "price": 30,
                    "currency": "TWD",
                    "limit": 10,
                    "purchased": 0,
                    "purchaseType": "PACKAGE",
                    "createdAt": "2020-03-27T08:35:59.472Z",
                    "updatedAt": "2020-03-27T08:35:59.472Z",
                    "isSoldOut": false
                  }
                ],
                "user": {
                  "id": 342,
                  "avatar": "https://dtjkoshajdq37.cloudfront.net/512x512/images/342_691f79f7-5d66-42a6-8b4d-ac18577c37b8.png",
                  "name": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  "username": "anhdo",
                  "type": "CREATOR",
                  "creatorLevel": "SUPERCREATOR",
                  "isStaff": false,
                  "badges": [
                    {
                      "id": 58615,
                      "userId": 342,
                      "type": "STAR_1",
                      "month": "2020-04"
                    }
                  ]
                }
              },
            ]

            commit('setPosts', posts)
            resolve()
          })
        }, 100)
      }
    }
  })
}