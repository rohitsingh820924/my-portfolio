export async function sendTelegramNotification(visitorData: any, data:any) {
    const botToken = process.env.NEXT_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_TELEGRAM_CHAT_ID;
  
    const message = `
  🔔 New Visitor Notification:
  - IP: ${visitorData.ip}
  - User Agent: ${visitorData.userAgent}
  - Page: ${visitorData.page}
  - Device: ${visitorData.device}
  - Referrer: ${visitorData.referrer || 'Direct'}
  ${data ? (
  `- Country :${data.country_name}
  - Region :${data.region_name}
  - City : ${data.city}
  - Zip : ${data.zip}
  - Location : https://maps.google.com/?q=${data.latitude},${75.77780151367188}
  `
  ) : ''}
  `;
  
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const payload = {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    };
  
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      console.log('Telegram notification sent.'+ message);
    } catch (error) {
      console.error('Failed to send Telegram message:', error);
    }
  }
  