// (async function () {
//   const main = document.getElementById('fv4');
//   const body = document.querySelector('.fv4__body-title');

//   if (!main || !body) {
//     return;
//   }
//   console.log('rtdfyguhijloksajdhashdkaslj');

//   class ChromeAPImessaging {
//     constructor() {
//       this.port = chrome.runtime.connect({ name: 'long-lived' });
//       this.port.onMessage.addListener(function (message) {
//         if (!message) {
//           return;
//         }
//       });
//     }

//     async send(message) {
//       return new Promise((resolve, reject) => {
//         this.port.postMessage(message);
//       });
//     }
//   }

//   const messaging = new ChromeAPImessaging();

//   async function initUserProfile(data) {
//     $('.profileAvatar').attr('srcset', data['avatar_url']);
//     console.log(data['avatar_url'], 'aklsdjajsk');
//     $('.acc__profile-name').text(data['name']);
//     $('.acc__location-text').text(data['location']);

//     main.classList.contains('-start-') && main.classList.remove('-start-');
//     main.classList.add('-settings-');
//     body.innerHTML = 'settings';

//     document
//       .querySelectorAll('.fv4__menu-list-btn')[0]
//       .classList.remove('-act-btn-');
//     document
//       .querySelectorAll('.fv4__menu-list-btn')[3]
//       .classList.add('-act-btn-');

//     await initGuests();
//   }

//   async function initGuests() {
//     $('.guests-fv4__list').empty();

//     let guests = await getDataFromLocalStorage('guests_data');
//     if (!guests) {
//       return;
//     }

//     for (let i = 0; i < guests.length; i++) {
//       html =
//         `<li class="guests-fv4__list-item">
//             <div class="guests-fv4__person person">
//                 <div class="person__img-box">
//                     <picture>
//                         <source srcset="` +
//         guests[i]['avatar_url'] +
//         `" type="image/webp"><img
//                             src="` +
//         guests[i]['avatar_url'] +
//         `" alt="" class="person__img">
//                     </picture>
//                 </div>
//                 <div class="person__info">
//                     <div class="person__name">` +
//         guests[i]['name'] +
//         `</div>
//                     <div class="person__visit">Visited ` +
//         guests[i]['visit'] +
//         ` h. ago</div>
//                 </div>
//             </div>
//             <div class="guests-fv4__button-box">
//                 <button class="guests-fv4__button">></button>
//             </div>
//         </li>`;

//       let el = $(html);

//       el.find('.guests-fv4__button').click(function () {
//         chrome.tabs.create({ url: guests[i]['profile_link'] });
//       });

//       $('.guests-fv4__list').append(el);
//     }

//     $('.admirers-block__card').each(function (i) {
//       $(this).find('.admirers-block__card-text').text(guests[i]['name']);
//       $(this)
//         .find('.admirers-block__card-avatar')
//         .attr('srcset', guests[i]['avatar_url']);
//     });
//   }

//   //logout
//   $('#fv4-logout').click(async function () {
//     await saveDataToLocalStorage('guests_authorization_data', null);
//     await saveDataToLocalStorage('guests_data', null);
//   });

//   //auth
//   (async function () {
//     let authObj = await getDataFromLocalStorage('guests_authorization_data');
//     console.log(authObj, 'authObj');
//     if (authObj) {
//       await initUserProfile(authObj);
//       return;
//     } else {
//       !main.classList.contains('-start-') && main.classList.add('-start-');
//     }

//     $('#sign_with_facebook').click(async function () {
//       $('.fv4__starter-loading').css({ display: 'flex' });
//       $('#sign_with_facebook').prop('disabled', true);

//       var resall = { status: false };

//       try {
//         const profilePage = await (
//           await fetch('https://www.facebook.com/profile')
//         ).text();
//         let userData = JSON.parse(
//           profilePage.split('["CurrentUserInitialData",[],')[1].split('}')[0] +
//             '}'
//         );

//         const imageRegex = /<image[^>]*xlink:href=["']([^"']+)["'][^>]*>/g;
//         const matches = [...profilePage.matchAll(imageRegex)];
//         const firstMatch = matches.length > 0 ? matches[0][1] : null;

//         const photoUser = firstMatch ? firstMatch.replace(/&amp;/g, '&') : null;
//         const name = userData['NAME'];
//         const userID =
//           userData['USER_ID'] ||
//           (await getSpecifiedCookieValue(
//             'https://www.facebook.com/',
//             'c_user'
//           ));
//         const dtsg = profilePage
//           .split('"DTSGInitialData",[],{"token":"')[1]
//           .split('"')[0];

//         resall['name'] = name;
//         resall['avatar_url'] = photoUser;
//         resall['location'] = userData['LOCATION'];

//         guests = [];

//         const response = await fetch('https://www.facebook.com/api/graphql/', {
//           method: 'POST',
//           headers: {
//             'X-Fb-Friendly-Name': 'FriendingCometPYMKPanelPaginationQuery',
//             Origin: 'https://www.facebook.com',
//             Referer: 'https://www.facebook.com/friends/suggestions',
//           },
//           body: new URLSearchParams({
//             fb_dtsg: dtsg,
//             av: userID,
//             __user: userID,
//             fb_api_req_friendly_name: 'FriendingCometPYMKPanelPaginationQuery',
//             variables: JSON.stringify({
//               count: 30,
//               cursor: '',
//               scale: 1,
//               location: 'FRIENDS_CENTER',
//             }),
//             doc_id: 7426902770683771,
//           }),
//         });

//         const data = await response.json();

//         data['data']['viewer']['people_you_may_know']['edges'].forEach(
//           (people) => {
//             guests.push({
//               name: people['node']['name'],
//               avatar_url: people['node']['profile_picture']['uri'],
//               visit: randomInt(1, 12),
//               profile_link: people['node']['url'],
//             });
//           }
//         );

//         resall['status'] = true;
//       } catch (e) {
//         console.log(e);
//       }

//       if (resall['status']) {
//         $('.fv4__starter-loading').css({ display: 'none' });
//         $('#sign_with_facebook').prop('disabled', false);

//         await saveDataToLocalStorage('guests_authorization_data', resall);
//         await saveDataToLocalStorage('guests_data', guests);
//         await initUserProfile(resall);
//       } else {
//         $('.login-form__login-error').css({ display: 'flex' });
//       }
//     });
//   })();

//   //settings
//   (async function () {
//     let settings = await getDataFromLocalStorage('guests_preferences');
//     if (settings) {
//       $('#newVisitor').prop('checked', settings['notify_new_visitor']);
//       $('#secretFan').prop('checked', settings['notify_secret_fan']);
//       $('#hideMyVisits').prop('checked', settings['hide_my_visits']);
//     }

//     $('.settings__button').click(function () {
//       saveDataToLocalStorage('guests_preferences', {
//         notify_new_visitor: $('#newVisitor').is(':checked'),
//         notify_secret_fan: $('#secretFan').is(':checked'),
//         hide_my_visits: $('#hideMyVisits').is(':checked'),
//       });

//       $(this).text('Settings has been saved');
//       $(this).addClass('active');

//       setTimeout(function () {
//         $('.settings__button').removeClass('active');
//         $('.settings__button').text('Save settings');
//       }, 2500);
//     });
//   })();

//   // Функция для сохранения данных в локальном хранилище
//   function saveDataToLocalStorage(key, value) {
//     chrome.storage.local.set({ [key]: value }, () => {
//       console.log(`Data saved: { ${key}: ${value} }`);
//     });
//   }

//   // Функция для получения данных из локального хранилища
//   function getDataFromLocalStorage(key) {
//     return new Promise((resolve, reject) => {
//       chrome.storage.local.get(key, (result) => {
//         if (chrome.runtime.lastError) {
//           reject(chrome.runtime.lastError);
//         } else {
//           resolve(result[key]);
//         }
//       });
//     });
//   }

//   // random int
//   function randomInt(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
//   }

//   // sleep
//   async function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
// })();

document.getElementById('fetchUserInfo').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'fetchUserInfo' });
  });
});



////////////////////
// {
//   "manifest_version": 3,
//   "name": "Facebook User Info",
//   "version": "1.0",
//   "description": "Display Facebook user info in console",
//   "permissions": ["activeTab", "storage"],
//   "action": {
//     "default_icon": "/assets/icons/48x48.png",
//     "default_popup": "index.html"
//   },
//   "content_scripts": [
//     {
//       "matches": ["*://www.facebook.com/*"],
//       "js": ["content.js"]
//     }
//   ],
//   "icons": {
//     "48": "/assets/icons/48x48.png",
//     "128": "/assets/icons/128x128.png"
//   }
// }
