<template>
  <el-container>
    <el-header height="45px">
      <div class="el-icon-arrow-left" @click="goback"></div>
      <h3>
        <img src="../assets/logo_new.png" alt />
      </h3>
      <div class="el-icon-s-unfold"></div>
    </el-header>
    <el-main>
      <div class="x1">
        <img :src="dataDetail[0].imgurl" />
      </div>
      <div class="proinfo">
        <div class="x2">
          <div class="proinfo-head">
            <div class="proinfo-head-t">{{dataDetail[0].goods_name}}</div>
            <span>经典爆款，年销售冠军！</span>
          </div>
          <div class="proinfo-collect el-icon-star-off"></div>
        </div>
        <div class="x3">
          <span>¥{{dataDetail[0].sell_price}}</span>
          <em>¥{{dataDetail[0].market_price}}</em>
        </div>
      </div>
      <div class="lijian">APP下单立减5元</div>
      <ul class="detailsinfo">
        <li>
          <div class="detailsinfo-l">编号</div>
          <div class="detailsinfo-r">{{dataDetail[0].gid}}</div>
        </li>
        <li>
          <div class="detailsinfo-l">花材</div>
          <div class="detailsinfo-r">{{dataDetail[0].info}}</div>
        </li>
        <li>
          <div class="detailsinfo-l">包装</div>
          <div class="detailsinfo-r">白色网纸内衬，不少于4张粉色雾面纸外包装</div>
          <!-- <div class="detailsinfo-r">{{dataDetail[0].imgurl}}</div> -->
        </li>
        <li class="last">
          <div class="detailsinfo-l">配送</div>
          <div class="detailsinfo-r last">送货上门（指定日期送鲜花、蛋糕上门）</div>
        </li>
      </ul>
      <div class="tabbar">
        <span id="addCart" @click="addCart">加入购物车</span>
        <span id="soonBuy" @click="addNow">立即购买</span>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      dataDetail: []
    };
  },
  methods: {
    goback() {
      let { targetUrl } = this.$route.params;
      if (targetUrl) {
        this.$router.push({
          path: targetUrl
        });
      } else {
        this.$router.push({
          path: "/home"
        });
      }
    },
    async getDetailData(id) {
      let {
        data: { data }
      } = await this.$axios.post("http://127.0.0.1:8827/goods/main", {
        gid: id
      });
      return data;
    },
    async addCart() {
      function getCookie(key) {
        var cookies = document.cookie;
        var arr = cookies.split("; ");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("=");
          if (key == arr2[0]) {
            return arr2[1];
          }
        }
      }
      let username = getCookie("username");
      if (username) {
        let {
          data: { data }
        } = await this.$axios.get("http://127.0.0.1:8827/carts/check", {
          params: {
            username,
            gid: this.$route.params.id
          }
        });
        if (data.length) {
          var num = data[0].num + 1;
          await this.$axios.post("http://127.0.0.1:8827/carts/edit", {
            username,
            gid: this.$route.params.id,
            num
          });
          let result = confirm("加入购物车成功，是否进入购物车");
          if (result) {
            this.$router.push("/cart");
          }
        } else {
          await this.$axios.post("http://127.0.0.1:8827/carts", {
            username,
            gid: this.$route.params.id,
            num: 1
          });
          let result = confirm("加入购物车成功，是否进入购物车");
          if (result) {
            this.$router.push("/cart");
          }
        }
      } else {
        this.$router.push("/login");
      }
    },
    async addNow() {
      function getCookie(key) {
        var cookies = document.cookie;
        var arr = cookies.split("; ");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("=");
          if (key == arr2[0]) {
            return arr2[1];
          }
        }
      }
      let username = getCookie("username");
      if (username) {
        let {
          data: { data }
        } = await this.$axios.get("http://127.0.0.1:8827/carts/check", {
          params: {
            username,
            gid: this.$route.params.id
          }
        });
        if (data.length) {
          var num = data[0].num + 1;
          await this.$axios.post("http://127.0.0.1:8827/carts/edit", {
            username,
            gid: this.$route.params.id,
            num
          });
          this.$router.push("/cart");
        } else {
          await this.$axios.post("http://127.0.0.1:8827/carts", {
            username,
            gid: this.$route.params.id,
            num: 1
          });
          this.$router.push("/cart");
        }
      } else {
        this.$router.push("/login");
      }
    }
  },
  async created() {
    let { id } = this.$route.params;
    let dataDetail = await this.getDetailData(id);
    this.dataDetail = dataDetail;
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  height: 40px;
  background-color: white;
  .el-icon-arrow-left,
  .el-icon-s-unfold {
    width: 25px;
    height: 25px;
    font-size: 24px;
    text-align: center;
    line-height: 44px;
  }
  h3 {
    img {
      height: 22px;
      width: 113px;
      margin-top: 10px;
    }
  }
}
.el-main {
  padding: 0;
  background: #f4f4f4;
  margin-top: 40px;
}
.x1 {
  width: 5.0625rem;
  img {
    width: 100%;
    height: 5.0625rem;
  }
}
.proinfo {
  padding: 0.175rem;
  background: #fff;
  margin-bottom: 1px;
  border-bottom: 1px solid #e9ecf0;
  .x2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .proinfo-head {
      width: 90%;
      .proinfo-head-t {
        width: 100%;
        font-size: 0.21rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span {
        color: red;
        font-size: 0.14rem;
      }
    }
    .el-icon-star-off {
      text-align: right;
      font-size: 0.275rem;
    }
  }
}
.x3 {
  margin-top: 0.15rem;
  span {
    font-size: 0.24rem;
    color: red;
    font-weight: bold;
  }
  em {
    font-size: 0.15rem;
    color: #b4babf;
    margin-left: 0.125rem;
    text-decoration: line-through;
  }
}
.lijian {
  padding: 0.15rem;
  background: #fff;
  font-size: 0.1875rem;
  text-align: center;
  margin-bottom: 0.125rem;
}
.detailsinfo {
  padding: 0.15rem;
  background: #fff;
  margin-bottom: 0.125rem;
  li {
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
    .detailsinfo-l {
      float: left;
      padding-top: 0.15rem;
      padding-bottom: 10px;
      font-weight: bold;
      color: #232323;
      width: 0.5625rem;
      font-size: 0.194444rem;
    }
    .detailsinfo-r {
      float: left;
      padding-top: 0.18rem;
      padding-bottom: 10px;
      border-bottom: 1px solid #e9ecf0;
      color: #666;
      width: 3.555556rem;
      font-size: 0.166667rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .last {
      border: none;
    }
  }
}
.tabbar {
  display: flex;
  background: #fff;
  height: 0.65rem;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  #addCart {
    display: block;
    width: 50%;
    line-height: 0.65rem;
    font-size: 0.175rem;
    color: #fff;
    background-color: #e6a23c;
  }
  #soonBuy {
    display: block;
    width: 50%;
    line-height: 0.65rem;
    font-size: 0.175rem;
    color: #fff;
    background-color: #f56c6c;
  }
}
</style>