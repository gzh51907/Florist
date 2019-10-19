<template>
      <el-container>
    <el-header height="45px">
      <div class="el-icon-arrow-left">
      </div>
      <div class="el-icon-s-unfold">
      </div>
    </el-header>
    <el-main>
        <div class="x1"><img src="../assets/go1.jpg" alt=""></div>
        <div class="proinfo">
              <div class="x2">
                <div class="proinfo-head">
                  <div class="proinfo-head-t">
                    一往情深-精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎 
                  </div>
                  <span>经典爆款，年销售冠军！</span>
                </div>    
                <div class="proinfo-collect el-icon-star-off"></div>
              </div>
              <div class="x3">
                <span>¥239</span>
                <em>¥260</em>
              </div>
        </div>
        <div class="lijian">APP下单立减5元</div>
        <ul class="detailsinfo">
          <li>
            <div class="detailsinfo-l">花语</div>
            <div class="detailsinfo-r">你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</div>
          </li>
          <li>
            <div class="detailsinfo-l">花语</div>
            <div class="detailsinfo-r">你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</div>
          </li>
          <li class="last">
            <div class="detailsinfo-l">花语</div>
            <div class="detailsinfo-r last" >你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</div>
          </li>
        </ul>
        <div class="tabbar">
          <a href="" id="addCart">
            加入购物车
          </a>
          <a href="" id="soonBuy">立即购买</a>
        </div>
        </el-main>
    </el-container>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
   line-height: .75rem;
   .el-icon-arrow-left,.el-icon-s-unfold{
     width: .5875rem;
     height: .5875rem;
     font-size:.275rem;
     text-align: center;
     line-height:.5875rem;
   }
}
.el-main{
  padding: 0;
}
.x1{
  width: 5.0625rem;
  img{
    width: 100%;
    height: 5.0625rem;
  }
}
.proinfo{
    padding: .175rem;
    background: #fff;
    margin-bottom: 1px;
    border-bottom: 1px solid #E9ECF0;
.x2{
    display: flex;
    justify-content: space-between;
      flex-wrap: wrap;
      .proinfo-head{     
          width: 90%;
          font-size: .175rem;
          .proinfo-head-t{
            display: inline-block;
          }
          span{
            color: red;
          }
    }
    .el-icon-star-off{
      text-align: right;
      font-size: .275rem;
    }
  }
}
.x3{
  margin-top: .15rem;
  span{
    font-size: .1875rem;
    color: red;
  }
  em{
    font-size: .15rem;
    color: #B4BABF;
    margin-left: .125rem;
    text-decoration: line-through;
  }
}
.lijian{
  padding: .15rem;
   background: #fff;
   font-size: .1875rem;
   text-align: center;
   margin-bottom: .125rem;
}
.detailsinfo{
  padding: .15rem;
   background: #fff;
    margin-bottom: .125rem;
   li{
     display: flex;
     justify-content: space-between;
     font-size: .15rem;
     .detailsinfo-l{
       padding: .15rem 0;
       font-weight: 500;
        color: #232323;
        width: .5625rem;
     }
     .detailsinfo-r{
      padding: .15rem 0;
       border-bottom: 1px solid #E9ECF0;
     }
     .last{
      border: none
    }
   }
}
.tabbar{
  display: flex;
   background: #fff;
   height: .65rem;
   text-align: center;
   position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
#addCart{
  display: block;
  width: 50%;
  line-height: .65rem;
  font-size: .175rem;
  color: #fff;
  background-color: #3D4D42;
}
#soonBuy{
  display: block;
  width: 50%;
  line-height: .65rem;
  font-size: .175rem;
  color: #fff;
  background-color: #FF734C;
}
}

</style>