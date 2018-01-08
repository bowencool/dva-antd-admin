import dva from 'dva';
import './index.less';

// 1. Initialize
const app = dva();

app.model(require("./models/login"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
