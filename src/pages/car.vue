<template>
  <el-container>
    <el-header height="47px">
      <div class="el-icon-arrow-left"></div>
      <h3>购物车</h3>
      <div class="nulld"></div>
    </el-header>
    <el-main>
      <div class="cart-list">
        <div class="check-b">
          <input type="checkbox" />
        </div>
        <div class="goods-l">
          <div class="pic">
            <img src="../assets/go1.jpg" alt />
          </div>
          <div class="goods-lr">
            <p>[鲜花]不变的承诺</p>
            <div class="num">
              <span>数量</span>
              <div class="input">
                <i class="-">-</i>
                <input type="text" value="1" />
                <i class="jia">+</i>
              </div>
            </div>
            <p class="jiage">
              ¥
              <span>539</span>
            </p>
          </div>
        </div>
      </div>
      <div class="cart-list">
        <div class="check-b">
          <input type="checkbox" />
        </div>
        <div class="goods-l">
          <div class="pic">
            <img src="../assets/go1.jpg" alt />
          </div>
          <div class="goods-lr">
            <p>[鲜花]不变的承诺</p>
            <div class="num">
              <span>数量</span>
              <div class="input">
                <i class="-">-</i>
                <input type="text" value="1" />
                <i class="jia">+</i>
              </div>
            </div>
            <p class="jiage">
              ¥
              <span>539</span>
            </p>
          </div>
        </div>
      </div>
      <div class="recommend"></div>
    </el-main>
    <el-footer height="40px">
      <span class="foot-l">
        合计:
        <em>￥1078</em>
      </span>
      <button class="foot-r">
        去结算
        <span>(1)</span>
      </button>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-bottom: 1px solid #bfbfbf;
  h3 {
    line-height: 47px;
    font-size: 18px;
  }
}
.el-main {
  padding: 0;
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
    font-size: 14px;
  }
}
.num {
  margin-top: 10px;
  span {
    font-size: 14px;
    display: inline-block;
    line-height: 26px;
  }
}
.input {
  display: inline-block;
  height: 25px;
  margin-left: 10px;
  background-color: #f7f9fa;
  border: 1px solid #e9ecf0;
  box-sizing: border-box;
  input {
    border: none;
    background-color: #f7f9fa;
    width: 59px;
    text-align: center;
    line-height: 25px;
  }
  i {
    border-right: 1px solid #e9ecf0;
    display: inline-block;
    width: 27px;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    vertical-align: top;
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
  bottom: 60px;
  left: 0;
  right: 0;
}
.foot-l {
  display: inline-block;
  width: 66.67%;
  vertical-align: top;
  font-size: 14px;
  border: 1px solid rgba(180, 186, 191, 0.5);
  box-sizing: border-box;
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
.recommend {
  margin-top: 10px;
}
</style>