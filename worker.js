export default {
  async fetch(request) {
    const html = await fetch('https://raw.githubusercontent.com/KellenJCole/Portfolio-Website/main/index.html');
    return new Response(await html.text(), {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};
