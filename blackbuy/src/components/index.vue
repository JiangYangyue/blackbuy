<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li v-for="(item, index) in catelist" :key="index.id">
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>{{ item.title }}</span>
                    <p>
                      <span v-for="(it, i) in item.subcates" :key="i.id">{{ it .title }}</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">{{ item.title }}</a>
                      </dt>
                      <dd>
                        <a
                          v-for="(it, i) in  item.subcates"
                          :key="i.id"
                          href="/goods/43.html"
                        >{{ it.title }}</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <el-carousel height="341px" indicator-position="outside">
                <el-carousel-item v-for="item in sliderlist" :key="item.id">
                  <img
                    src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1675034842,241985559&fm=26&gp=0.jpg"
                  />
                  <h3>{{ item.title }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list" style="overflow-y: scroll">
              <li v-for="(item,index) in toplist" :key="item.id">
                <div class="img-box">
                  <label>{{ index+1 }}</label>

                  <img
                    src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1675034842,241985559&fm=26&gp=0.jpg"
                  />
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{ item.title }}</a>
                  <!-- <span>{{ item.add_time | shortTime }}</span> -->
                  <span>{{item.add_time | shortTime }}</span>
                </div>
              </li>
              <!-- <li>
                <div class="img-box">
                  <label>2</label>
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200314272543.jpg"
                  />
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</a>
                  <span>2015-04-20</span>
                </div>
              </li>
              <li>
                <div class="img-box">
                  <label>3</label>
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200318534459.jpg"
                  />
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">飞利浦（PHILIPS）DVP3690 全高清DVD影碟机播放器</a>
                  <span>2015-04-20</span>
                </div>
              </li>
              <li>
                <div class="img-box">
                  <label>4</label>
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200258403759.jpg"
                  />
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</a>
                  <span>2015-04-20</span>
                </div>
              </li>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-for="(item, index) in msg" :key="index.level1cateid">
      <div class="main-tit">
        <h2>{{ item.catetitle }}</h2>
        <p>
          <a
            href="/goods/43.html"
            v-for="(it, i) in item.level2catelist"
            :key="i.subcateid"
          >{{it.subcatetitle}}</a>

          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="(it, i) in item.datas" :key="it.artID">
              <!-- <a href="#/site/goodsinfo/87" class> -->
              <router-link :to="'/detail/' + it.artID ">
                <div class="img-box">
                  <img
                    src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1675034842,241985559&fm=26&gp=0.jpg"
                  />
                </div>
                <div class="info">
                  <h3>{{it.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>{{ it.stock_quantity }}</strong>
                    <span>{{i}}</span>
                    <span>
                      市场价：
                      <s>{{ it.market_price }}</s>
                    </span>
                  </p>
                </div>
              </router-link>
              <!-- </a> -->
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li>
              <a href="#/site/goodsinfo/102" class>
                <div class="img-box">
                  <img src="http://39.108.135.214:8899/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg" />
                </div>
                <div class="info">
                  <h3>Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣</h3>
                  <p class="price">
                    <b>800</b>元
                  </p>
                  <p>
                    <strong>库存 200</strong>
                    <span>
                      市场价：
                      <s>1000</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/103" class>
                <div class="img-box">
                  <img src="http://39.108.135.214:8899/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg" />
                </div>
                <div class="info">
                  <h3>骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫衣</h3>
                  <p class="price">
                    <b>198</b>元
                  </p>
                  <p>
                    <strong>库存 100</strong>
                    <span>
                      市场价：
                      <s>297</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
    </div>-->
  </div>
</template>
<script>
// import moment from "moment";
// import axios from "axios";
export default {
  name: "index",
  data: function() {
    return {
      // 顶部数据
      catelist: [],
      sliderlist: [],
      toplist: [],
      //底部数据
      msg: []
    };
  },
  methods: {
    send() {
      // 获取顶部列表
      this.$axios
        .get("http://134.175.59.248:8899/site/goods/gettopdata/goods")
        .then(result => {
          (this.catelist = result.data.message.catelist),
            (this.sliderlist = result.data.message.sliderlist),
            (this.toplist = result.data.message.toplist);
        });
      // 获取底部列表
     
      this.$axios
        .get("http://134.175.59.248:8899/site/goods/getgoodsgroup")
        .then(result => {
          // window.console.log(result);
          this.msg = result.data.message;
        });
    },
   
  },
  created() {
    this. send();
    // this.text();
  },

  updated() {
    //   window.console.log(this.sliderlist);
    // let centter = [];
    // this.sliderlist.map(function(v) {
    //   let cen = new URL(v.img_url);
    //   // window.console.log(cen);
    //   let imgadd = cen.pathname;
    //   v.img_url = "134.175.59.248:8899" + imgadd;
    //   centter.push(v);
    //   return v;
    //   // return v.img_url;
    // });
    // window.console.log(centter);
    // window.console.log(qianzhui);
    // qianzhui = qianzhui.replace("/111.230.232.110/g", "444.555.666.777");
    // window.console.log(qianzhui);
    // this.sliderlist.
    // window.console.log(this.sliderlist[0].img_url);
  }
  // 過濾器
};
</script>
<style >
.banner-img img {
  height: 100%;
  width: 100%;
}
</style>