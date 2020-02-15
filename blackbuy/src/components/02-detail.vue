<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <!-- 放大镜组件 -->
                <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions" />
              </div>
              <div class="goods-spec">
                <h1>{{ goodsinfo.title }}</h1>
                <p class="subtitle">{{ goodsinfo.zhaiyao }}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{ goodsinfo.goods_no }}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">{{ goodsinfo.market_price }}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <div class="el-input-number el-input-number--small">
                          <el-input-number
                            v-model="buynum"
                            :min="1"
                            :max=" goodsinfo.stock_quantity "
                            label="描述文字"
                          ></el-input-number>
                        </div>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{ goodsinfo.stock_quantity }}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button @click="addCart" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <Affix>
                  <!-- <span class="demo-affix">Fixed at the top</span> -->
                  <ul>
                    <li>
                      <a
                        href="javascript:;"
                        @click="tabIndex=0"
                        :class="{selected:tabIndex == 0}"
                      >商品介绍</a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        @click="tabIndex=1"
                        :class="{selected:tabIndex == 1}"
                      >商品评论</a>
                    </li>
                  </ul>
                </Affix>
              </div>
              <div
                class="tab-content entry"
                v-show="tabIndex==0"
                v-html="goodsinfo.content"
              >{{goodsinfo.content}}</div>
              <div class="tab-content" v-show="tabIndex==1">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model.trim="Comment_txt"
                          @keyup.13="sendComment"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="sendComment"
                        />
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                      v-show="totalcount==0"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(item, index) in Comment" :key="item.id">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.user_name}}</span>
                          <span>{{item.add_time | shortTimePlut}}</span>
                        </div>
                        <p>{{item.content}}</p>
                        <span>{{index}}</span>
                      </div>
                    </li>
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <el-pagination
                      :page-size="pageSize"
                      @current-change="pizeChange"
                      :current-page="pageIndex"
                      :total="totalcount"
                    ></el-pagination>

                    <!-- <Page :total="100" show-elevator /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(item, index) in hotgoodslist" :key="item.id">
                    <div class="img-box">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      <router-link :to="'/detail/'+ item.id ">
                        <img
                          src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1675034842,241985559&fm=26&gp=0.jpg"
                        />
                      </router-link>
                      <!-- </a> -->
                    </div>
                    <div class="txt-box">
                      <router-link :to="'/detail/'+ item.id ">{{ item.title}} {{index}}</router-link>
                      <span>{{ item.add_time | shortTime }}</span>
                    </div>
                  </li>
                </ul>
                <BackTop></BackTop>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
// import moment from "moment";
export default {
  name: "detail",
  data: function() {
    return {
      artId: "",

      goodsinfo: [],
      hotgoodslist: [],
      imglist: [],
      buynum: 1,

      tabIndex: 0,
      //   总评论数
      totalcount: 0,
      //评论数组
      Comment: [],
      // 当前分页页码
      pageIndex: 1,
      // 当前页面显示数据条数
      pageSize: 6,
      // 评论文本
      Comment_txt: "",
      // 放大镜
      images: {
        // required
        normal_size: [
          {
            id: this.artId,
            url:
              "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1675034842,241985559&fm=26&gp=0.jpg"
          },
          {
            id: this.artId,
            url:
              "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1675034842,241985559&fm=26&gp=0.jpg"
          }
        ]
      },
      zoomerOptions: {
        zoomFactor: 3, // scale for zoomer
        pane: "pane", // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: "zoomer", // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click: false, // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    };
  },
  methods: {
    send() {
      (this.buynum = ""), (this.artId = this.$route.params.artId);
      // window.console.log(this.artId);
      // window.console.log(this.$route.params);

      this.$axios
        .get(`http://134.175.59.248:8899/site/goods/getgoodsinfo/${this.artId}`)
        .then(res => {
          window.console.log(res);
          this.goodsinfo = res.data.message.goodsinfo;
          this.hotgoodslist = res.data.message.hotgoodslist;
          this.imglist = res.data.message.imglist;
        });
      this.getComment();
    },
    // 获取评论
    getComment() {
      this.$axios
        .get(
          `http://134.175.59.248:8899/site/comment/getbypage/goods/${this.artId}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        )
        .then(res => {
          window.console.log(res);
          this.Comment = res.data.message;
          this.totalcount = res.data.totalcount;
        });
    },
    // 点击分页页码发送数据
    pizeChange(pageIndex) {
      this.pageIndex = pageIndex;

      this.getComment();
      window.console.log(this.totalcount);
    },
    sendComment() {
      if (this.Comment_txt == "") {
        this.$Message.warning("请输入数据");
      } else {
        this.$axios
          .post(`site/validate/comment/post/goods/${this.artId}`, {
            commenttxt: this.Comment_txt
          })

          .then(res => {
            window.console.log(res);
            if (res.data.status == 0) {
              this.$Message.success(res.data.message);
              this.pageIndex = 1;
              this.getComment();
              // 将输入文本框清空
              this.Comment_txt = "";
            }
          });
      }
    },
    addCart() {
      // 提交载荷
      this.$store.commit("add2Cart", {
         // 获取商品ID
        goodsId: this.artId,
        // 获取商品数量
        goodsNum: this.buynum
      });
    }
  },

  created() {
    this.send();
  },
  watch: {
    $route(val, zhi) {
      window.console.log(val, zhi + "页面更新了");
      this.send();
    }
  }
  //    filters: {
  //     shortTime(value) {
  //       // window.console.log(value);
  //       return moment(value).format("YYYY/MM/DD");
  //     }
  //   }
};
</script>
<style >
.tab-content img {
  display: block;
  max-width: 100%;
}
</style>

