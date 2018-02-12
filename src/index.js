import dva from 'dva';
import createHistory from 'history/createBrowserHistory'
import { message } from 'antd';
import './index.less';

// Initialize
const app = dva({
  history: createHistory(),
  onError(err) {
    message.error(err.message)
  }
});

app.model(require("./models/login"));
app.model(require("./models/list"));

// Router
app.router(require('./router'));

// Start
app.start('#root');
