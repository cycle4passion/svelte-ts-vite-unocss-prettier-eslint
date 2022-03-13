import 'uno.css';
// choose one of the following
//import '@unocss/reset/normalize.css';
//import '@unocss/reset/eric-meyer.css';
import '@unocss/reset/tailwind.css';

// @ts-ignore - Added SJR preventing Error TS2306
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
