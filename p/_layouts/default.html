# 基本结构

大众化的处理思路,主要分为如下几部分: 动静分离,页面组装,数据存取,负载均衡,反向通信.

- Nginx
- Nodejs
- Express
- Redis
- Express

#### 目录安排
- /home/{HOME}/webroot
  - client
    - js
    - css
    - ...
  - server
    - lib
    - middle
    - handle
    - app.js        
    - 等其他配置文件

#### 动静分离

静态页面 = 纯静态文件;
动态页面 = 页面模板 + 数据;
那么在服务器文件布局上就分为了 client,server两个目录.
- client: 存放的是页面资源,可以看做纯静态资源,比如纯静态页面,页面模板,js,css,img等
- server: 服务器端代码,提供Restful接口.

请求首先到达Nginx,利用try_files,首先到client/目录下寻找静态文件,如果有会优先返回纯静态资源,如果没有则会请求到Nodejs,在Nodejs中动态处理,在Nodejs中做最后容错处理

#### 页面组装

服务器端组装 = Nodejs中JavaScript引擎 + Vue.js + 数据;
客户端组装 = 浏览器中JavaScript引擎 + Vue.js + RESTful接口获取数据 + 数据绑定;

#### 数据存取

热点数据: Redis,基本上只用 key-value的存取操作,不做任何排序,计算. 要求就是快
常规数据: Elastic(Elasticsearch),检索素速度快,使用简单,但是没有事务支持.所以还会支持PostgreSQL,用来支持事务.

#### 反向通信

websocket

#### 设计上的缺陷
不支持多域名,例如domain1,和domain2,都定向到这台服务器,在数据和代码上无法隔离. 之后应该改进这点.能够适应多域名.

#### Nodejs层结构

选择了Express,也有考虑过其他尝尝鲜,比如Koa,Hapi,Meteor等,一个是学习成本,一个是用户数量上都没有Express来的快.
- Express:
  - endpoints: 对应的是server/handle目录
  - middleware: 对应的是server/middle目录
  - router: 最初想来一套简单的动态路由加载机制.说白了就是根据请求的url动态到handle目录下寻找对应的文件,加载并缓存后执行.
  好处是不需要代码中配置路由表,然后能够使用Promise规范包装各种回调函数. 坏处是无法直接使用Express的各种middleware,必须人为的做一些适配工作.但是现在已经有了折中的处理方案.有时间再实施.
  - 工具函数库: 对应的是server/libs目录

#### 开发过程
- client/目录中创建页面相关文件,并设置好获取数据的接口地址
- server/目录中创建对应的接口文件
- app.js中增加路由配置
