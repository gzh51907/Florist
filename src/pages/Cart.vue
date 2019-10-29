<template>
  <el-container>
    <el-header height="47px">
      <div class="el-icon-arrow-left" @click="goback"></div>
      <h3>购物车</h3>
      <div class="nulld"></div>
    </el-header>
    <el-main>
      <div class="card" v-for="item in dataCart" :key="item.gid">
        <el-checkbox></el-checkbox>
        <img :src="item.imgurl" />
        <div class="info">
          <section class="title">{{item.goods_name}}</section>
          <section class="num">
            数量：
            <el-input-number v-model="item.num" @change="changeQty(item.id,$event)"></el-input-number>
          </section>
          <section class="price">
            单价:
            <span>￥{{item.sell_price}}</span>
          </section>
        </div>
        <el-row>
          <el-button type="danger" icon="el-icon-delete" circle @click="remove(item.gid)"></el-button>
        </el-row>
      </div>
    </el-main>
    <el-footer height="40px">
      <div class="foot-l">
        <el-checkbox>全选</el-checkbox>
        <span>
          合计:
          <em>￥</em>
        </span>
      </div>
      <button class="foot-r">
        去结算
        <span>0</span>
      </button>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: "Cart",
  inject: ["reload"],
  data() {
    return {
      dataCart: []
    };
  },
  methods: {
    goback() {
      this.$router.push("/home");
    },
    handleChange() {},

    async remove(gid) {
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
      await this.$axios.post("http://localhost:8827/carts/delete", {
        username: getCookie("username"),
        gid
      });
      this.reload();
    },

    async getCartNum(username) {
      let {
        data: { data }
      } = await this.$axios.get("http://localhost:8827/carts", {
        params: {
          username
        }
      });
      return data;
    },
    async getCartDate(gid) {
      let {
        data: { data }
      } = await this.$axios.post("http://localhost:8827/goods/main", {
        gid
      });
      return data;
    }
  },
  computed: {},
  async created() {
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
    let dataNum = await this.getCartNum(getCookie("username"));
    let num = [];
    for (let i = 0; i < dataNum.length; i++) {
      var temp1 = {
        gid: dataNum[i].gid,
        num: dataNum[i].num
      };
      num.push(temp1);
    }
    let dataCart = [];
    for (let j = 0; j < num.length; j++) {
      var temp2 = (await this.getCartDate(num[j].gid))[0];
      temp2.num = num[j].num;
      dataCart.push(temp2);
    }
    this.dataCart = dataCart;
  }
  // beforeRouteEnter(to, from, next) {
  //   next();
  // }
};
</script>
<style lang="scss" scoped>
html {
  width: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-bottom: 1px solid #cccccc;
  h3 {
    line-height: 47px;
    font-size: 18px;
  }
}
.el-main {
  padding: 0;
  width: 100%;
  .card {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 140px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    .el-row {
      padding: 0.4375rem 0 0.5625rem;
    }
    .el-checkbox {
      // margin-left: 5px;
      margin-top: 50px;
    }
    img {
      width: 140px;
      height: 140px;
      margin-left: 20px;
    }
    .info {
      margin-left: 10px;
      padding-right: 30px;
      width: 240px;
      overflow: hidden;
      .title {
        font-size: 18px;
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .num {
        font-size: 14px;
        margin-top: 0;
        margin-top: 25px;
        width: 240px;
      }
      .price {
        font-size: 14px;
        margin-top: 10px;
        width: 240px;
        span {
          font-size: 16px;
          color: red;
        }
      }
    }
  }
}

.el-icon-arrow-left {
  width: 47px;
  height: 47px;
  font-size: 22px;
  text-align: center;
  line-height: 47px;
}
.nulld {
  width: 47px;
  height: 47px;
}
.cart-list {
  padding: 10px 0;
  background: #fff;
  overflow: hidden;
}
.check-b {
  width: 12%;
  height: 122px;
  text-align: center;
  float: left;
  line-height: 122px;
}
.goods-l {
  float: left;
  width: 87%;
  position: relative;
  .pic {
    width: 31%;
    float: left;
    img {
      width: 100%;
    }
  }
}
.goods-lr {
  padding: 0 10px;
  width: 63%;
  float: left;
  p {
    width: 100%;
    font-size: 0.166667rem;
  }
}
.num {
  margin-top: 10px;
  span {
    font-size: 0.166667rem;
    display: inline-block;
    line-height: 26px;
  }
}
.jiage {
  position: absolute;
  left: 118px;
  bottom: 0;
  font-size: 1rem;
  color: #ff734c;
  font-weight: 500;
}
.el-footer {
  padding: 0;
  height: 38px;
  line-height: 38px;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 100;
}
.foot-l {
  display: inline-block;
  width: 66.67%;
  vertical-align: top;
  font-size: 14px;
  border: 1px solid rgba(180, 186, 191, 0.5);
  box-sizing: border-box;
  background-color: white;
  .el-checkbox {
    margin-left: 15px;
    margin-right: 15px;
  }
  em {
    color: #ff734c;
  }
}
.foot-r {
  display: inline-block;
  width: 33.33%;
  vertical-align: top;
  border: none;
  height: 100%;
  border-radius: 0;
  color: #fff;
  font-size: 18px;
  text-align: center;
  background-color: #ff734c;
}
.el-input-number {
  width: 130px;
  span {
    height: 25px;
  }
  div {
    input {
      height: 25px;
    }
  }
}
</style>