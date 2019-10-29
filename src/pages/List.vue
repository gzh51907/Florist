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
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#f37575"
      >
        <el-menu-item index="1">综合</el-menu-item>
        <el-menu-item index="2" class="list_price">价格</el-menu-item>
        <el-menu-item index="3">销量</el-menu-item>
        <el-menu-item index="4">新品</el-menu-item>
      </el-menu>
      <div class="flex-box">
        <div class="flex-item" v-for="item in dataList" :key="item.gid" @click="goto(item.gid)">
          <div class="title">
            <img :src="item.imgurl" />
          </div>
          <div class="cont">
            <h2>{{item.goods_name}}</h2>
            <h3>{{item.info}}</h3>
            <h4>
              ¥{{item.sell_price}}
              <span>¥{{item.market_price}}</span>
            </h4>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      dataList: [],
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    async getListData(classify) {
      let {
        data: { data }
      } = await this.$axios.post("http://10.3.133.60:8827/goods/main", {
        classify
      });
      return data;
    },
    goto(id) {
      this.$router.push({
        name: "detail",
        params: { targetUrl: this.$route.path, id }
      });
    },
    goback() {
      this.$router.push("/classify");
    }
  },
  async created() {
    this.dataList = await this.getListData("鲜花爆款1");
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  height: 40px;
  .seach {
    width: 100%;
    input {
      width: 100%;
      height: 29px;
      background: #ffffff url(../assets/seach.png) no-repeat 8px center;
      background-size: 14px 15px;
      padding-left: 30px;
      box-sizing: border-box;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      background-color: rgb(237, 237, 237);
    }
  }
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
  background-color: white;
  padding-top: 0px;
  .el-menu {
    display: flex;
    justify-content: space-around;
  }
  .flex-box {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    height: 1000px;
    .flex-item {
      display: flex;
      width: 49%;
      border: 1px solid #e5e5e5;
      margin-bottom: 12px;
      flex-direction: column;
      background: #fff;
      border-radius: 5px;
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
    }
  }
}
</style>