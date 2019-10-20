<template>
  <el-container>
    <el-header height="45px">
      <div class="seach">
        <img src="../assets/seach.png" alt />
      </div>
      <h3>
        <img src="../assets/logo_new.png" alt />
      </h3>
      <div class="tel">
        <img src="../assets/tel.png" alt />
      </div>
    </el-header>
    <el-main style="padding:0">
      <el-carousel :interval="5000" height="2.722222rem">
        <el-carousel-item v-for="item in adlist" :key="item">
          <img :src="item" style="width:100%;height:100%" />
        </el-carousel-item>
      </el-carousel>
      <div class="banner-text">
        <p class="banner-l">
          <img src="../assets/1.png" alt />
          匠心花艺严选
        </p>
        <p class="banner-m">
          <img src="../assets/2.png" alt />
          精准实时配送
        </p>
        <p class="banner-r">
          <img src="../assets/3.png" alt />
          优质体验流程
        </p>
      </div>
      <div class="contain" v-for="item in allMainData" :key="item[1].goods_name">
        <h2 class="w1">{{item[1].classify}}</h2>
        <div class="flex-box">
          <div class="flex-item" v-for="item in item" :key="item.gid" @click="goto(item.gid)">
            <div class="title">
              <!-- <div class="title" :style="{background:'url('+item.imgurl+')'}"> -->
              <img :src="item.imgurl" />
            </div>
            <!-- <div
              class="title"
              style="background:url('https://static.bloomapp.com.cn/0d03d4aa4396562763f9.jpg')"
            ></div>-->
            <div class="cont">
              <h2>{{item.goods_name}}</h2>
              <h3>{{item.info}}</h3>
              <h4>
                {{item.price.toFixed(2)}}
                <span>{{(item.price*1.5).toFixed(2)}}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      adlist: [
        require("../assets/1.jpg"),
        require("../assets/2.jpg"),
        require("../assets/3.jpg")
      ],
      allMainData: {}
    };
  },
  methods: {
    async getMainData(classify) {
      let {
        data: { data }
      } = await this.$axios.post("http://10.3.133.163:8827/goods/main", {
        classify
      });
      return data;
    },
    goto(id) {
      this.$router.push({ name: "detail", params: { id } });
    }
  },
  async created() {
    let dataRe = await this.getMainData("热卖推荐");
    let dataBao = await this.getMainData("爆款鲜花");
    let dataCake = await this.getMainData("生日蛋糕");
    let dataLan = await this.getMainData("开业花篮");
    let dataLove = await this.getMainData("爱情鲜花");
    this.allMainData = {
      dataRe,
      dataBao,
      dataCake,
      dataLan,
      dataLove
    };
  }
};
</script>
<style lang="scss" >
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  display: flex;
  justify-content: space-between;
}
.seach img {
  height: 25px;
  width: 25px;
}
h3 img {
  height: 22px;
  width: 113px;
}
.tel img {
  width: 24px;
  height: 25px;
}
.el-main {
  background: rgb(244, 244, 244);
  overflow: auto;
}
.banner-text {
  display: flex;
  background-color: #fff;
  font-size: 12px;
  line-height: 35px;
}
.banner-text > p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 11px;
    height: 12px;
  }
}
.contain {
  padding-left: 5px;
  padding-right: 5px;
}
.w1 {
  font-size: 0.138889rem;
  position: relative;
  text-align: center;
  line-height: 0.375rem;
  height: 0.375rem;
  color: #303030;
  margin-bottom: 0.111111rem;
}
.w1::before {
  border-top: 2px solid #bfbfbf;
  content: "";
  left: 50%;
  top: 50%;
  position: absolute;
  width: 60px;
  margin-left: 40px;
}
.w1::after {
  border-top: 2px solid #bfbfbf;
  content: "";
  left: 50%;
  top: 50%;
  position: absolute;
  width: 60px;
  margin-left: -102px;
}
.w2 {
  float: right;
  padding-top: 12px;
  padding-bottom: 12px;
}
.w2 img {
  width: 351px;
  height: 185px;
}
.flex-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}
.flex-item {
  display: flex;
  width: 49%;
  border: 1px solid #e5e5e5;
  margin-bottom: 12px;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
}
.title {
  width: 100%;
  height: 2.5rem;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}
.cont {
  padding: 0 16px;
  h2 {
    line-height: 0.347222rem;
    font-size: 0.15rem;
    color: #333333;
    margin: 0px;
    font-weight: normal;
    margin-top: 5px;
    height: 0.347222rem;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h3 {
    line-height: 0.263889rem;
    height: 0.263889rem;
    font-size: 0.15rem;
    color: #999999;
    margin: 0px;
    font-weight: normal;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  h4 {
    line-height: 0.458333rem;
    color: #df4d28;
    font-size: 0.2rem;
    height: 0.458333rem;
    margin: 0px;
    font-weight: normal;
    border-top: 1px solid #f5f5f5;
    margin-top: 5px;
    font-weight: bold;
    span {
      line-height: 0.458333rem;
      font-size: 0.12rem;
      color: #646464;
      margin: 0px;
      font-weight: normal;
      text-decoration: line-through;
      margin-left: 5px;
    }
  }
}
.el-footer {
  color: rgb(84, 84, 84);
}
</style>