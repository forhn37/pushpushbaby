self.addEventListener('push', function(event) {
  console.log('푸시 알림 수신:', event.data.text());

  const title = '푸시 알림';
  const options = {
    body: event.data.text(),
    icon: 'icon.png',
    badge: 'badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
