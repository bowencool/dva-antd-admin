import dva from 'dva';
import { message } from 'antd';
import './index.less';

// 1. Initialize
const app = dva({
  onError(err) {
    message.error(err.message)
  }
});

app.model(require("./models/login"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
