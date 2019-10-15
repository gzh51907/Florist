<template>
<el-container>
     <el-header height="45px"> 
    <div class="nulld"></div>
  <h3>我的</h3>
  <div class="tel">
      <img src="../assets/tel.png" alt="">
  </div>
  </el-header>
  <el-main style="padding:0">
    <div class="m-top">
      <div class="m1">
        <img src="../assets/yh.png" alt="">
        <div class="dl">您还没有登录</div>
      </div>
      <div class="m2">
        <div class="m2-l m2-common">
          <div class="num" style="color: #c80000">0元</div>
          <div class="a1">余额</div>
        </div>
        <div class="splitLine"></div>
        <div class="m2-m m2-common">
           <div class="num" style="color: #ff944e">0个</div>
          <div class="a1">优惠券</div>
        </div>
         <div class="splitLine"></div>
        <div class="m2-r m2-common">
           <div class="num" style="color: #67d1fb">0积分</div>
          <div class="a1">积分</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="title">
        <div class="titleleft">我的订单</div>
        <div class="titleright">查看全部订单 ></div>
      </div>
      <div class="fil">
        <div class="">
          <img src="../assets/m1.jpg" alt="">
          待付款</div>
        <div class="">
          <img src="../assets/m2.jpg" alt="">待收货</div>
        <div class="">
          <img src="../assets/m3.jpg" alt="">待评价</div>
        <div class="">
          <img src="../assets/m4.jpg" alt="">售后</div>
      </div>
    </div>
     <div class="commonList">
        <img src="../assets/m5.jpg" alt="">
        联系人
        <div class="el-icon-arrow-right"></div>
      </div>
      <div class="commonList">
        <img src="../assets/m6.jpg" alt="">
        服务中心
        <div class="el-icon-arrow-right"></div>
      </div>
  </el-main>
  <div class="foot">
    <div>客服电话：
      <span style="color:red">400-662-1314</span>
    </div>
    <div>工作时间：
      <span>周一至周日09：00-18：00</span>
    </div>
  </div>
</el-container>
</template>
<script>
export default {
    name:'Mine',
    data(){
      return{
        
      }
    }
}
</script>
<style lang="scss" scoped>
.el-header{
   h3{
     line-height: 45px;
     font-size: 18px;
   }
}
.m-top{
  margin-bottom: 8px;
}
.m1{
    position: relative;
    height: 165px;
    margin: 0 auto;
    background: #fff url(../assets/4.jpg) no-repeat center center;
    background-size: cover;
    color: #3c3c3c;
    img{
      position: absolute;
      overflow: hidden;
      border-radius: 100%;
      width: 65px;
      height: 65px;
      left: 12px;
      top: 46px;
    }
    .dl{
      position: absolute;
    left:82px;
    top: 72px;
    font-size: 16px;
    color: #343434;
    margin-left: 10px;
    letter-spacing: 1px;
    }
}
.m2{
  display: flex;
  justify-content:space-around;
  align-items: center; 
  background-color: #fff;
  height: 59px;
 
  .m2-common{
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .a1{
     opacity: 0.6;
  }
}
.num{
  font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
    letter-spacing: 1px;
}
.splitLine{
    width: 2px;
    height:32px;
    background: #f0f0f0;
}
.container{
    margin-bottom: 8px;
    background: #fff;
    padding: 13px 12px 0;
    .title{
      height: 22px;
      line-height: 22px;
      display: flex;
      justify-content: space-between;
      .titleleft{
        font-size: 14px;
        color: #404040;
      }
       .titleright{
        font-size: 13px;
        color: #858585;
      }
    }
}
.fil{
  display: flex;
  
}
.fil>div{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 70px;
  color: #676767;
  img{
    margin-bottom: 10px;
    width: 30px;
    height: 21px;
  }
}
.el-main{
  background: rgb(244, 244, 244);
  overflow: auto;
}
.commonList{
    height: 54px;
    font-size: 15px;
    line-height: 54px;
    margin: 0;
    padding: 0 12px;
    background-color: #ffffff;
    border-bottom: 1px solid #f6f6f6;
    display: flex;
    align-items: center;
      img{
        width: 25px;
        height: 25px;
        margin-right: 4px;
  }
  .el-icon-arrow-right{
   position: absolute;
   right: 12px;
  }
  
}
.foot{
    height: 58px;
    background: #fff;
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    padding: 4px 0px;
    color: #666666;
    font-size: 14px;
    flex-wrap: wrap;
    padding-bottom: 50px;
}
</style>