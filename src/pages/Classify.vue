<template>
  <el-container>
    <el-header height="45px">
      <div class="seach">
        <input type="seach" placeholder="请输入鲜花名称/关键字" />
      </div>
    </el-header>
    <el-main>
      <el-radio-group v-model="tabPosition">
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane :label="item[1].type" v-for="item in allClassData" :key="item[1].class_name">
          <img :src="item[0].titleurl" />
          <div class="con">
            <span v-for="item in item" :key="item.imgurl" @click="goto">
              <img :src="item.imgurl" />
              <p>{{item.class_name}}</p>
            </span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "Classify",
  data() {
    return {
      tabPosition: "left",
      allClassData: {}
    };
  },
  methods: {
    async getMainData(type) {
      let {
        data: { data }
      } = await this.$axios.post("http://192.168.6.182:8827/goods/main", {
        type
      });
      return data;
    },
    goto() {
      this.$router.push("/list");
    }
  },
  async created() {
    let dataFresh = await this.getMainData("鲜花");
    let dataForever = await this.getMainData("永生花");
    let dataCake = await this.getMainData("蛋糕");
    let dataSpe = await this.getMainData("特色礼品");
    this.allClassData = {
      dataFresh,
      dataForever,
      dataCake,
      dataSpe
    };
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  padding: 6px 12px;
  line-height: 0;
  border-bottom: 1px solid rgb(237, 237, 237);
  z-index: 9;
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
}

.el-main {
  padding: 0;
  .el-tabs {
    background: #ffffff;
    .el-tabs__nav {
      height: 13.888889rem;
    }
  }
  .el-tab-pane {
    padding-right: 10px;
    padding-top: 10px;
    font-size: 0.152778rem;
    img {
      width: 100%;
    }
    .con {
      width: 100%;
      &::after {
        content: "";
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
      }
      span {
        display: block;
        width: 33%;
        text-align: center;
        padding: 10px 0;
        color: #232323;
        font-size: 0.152778rem;
        float: left;
        img {
          width: 0.833333rem;
          height: 0.833333rem;
          border-radius: 100%;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>