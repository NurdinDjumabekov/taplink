chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'fetchUserInfo') {
    const nameElement = document.querySelector(
      '#mount_0_0_e0 > div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x78zum5.xdt5ytf.x1t2pt76 > div > div > div:nth-child(1) > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.xl56j7k.x1qjc9v5.xozqiw3.x1q0g3np.x1l90r2v.x1ve1bff > div > div > div.x6s0dn4.x78zum5.xvrxa7q.x9w375v.xxfedj9.x1roke11.x1es02x0 > div.x78zum5.x15sbx0n.x5oxk1f.x1jxijyj.xym1h4x.xuy2c7u.x1ltux0g.xc9uqle > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1cy8zhl.xexx8yu > div > div > span > h1'
    );

    const name = nameElement ? nameElement.innerText : 'Name not found';

    console.log('Name:', name);
  }
});
