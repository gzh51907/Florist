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
          <input type="checkbox">
        </div>
        <div>
          <img src="" alt="">
          <div>
            <p></p>
            <div></div>
            <p></p>
          </div>
        </div>
      </div>
      <div class="recommend"></div>
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>
<script>
export default {
    name:'Cart',
    data(){
      return{
        
      }
    }
}
</script>
<style lang="scss" scoped>
.el-header{
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-bottom: 1px solid #bfbfbf;
   h3{
     line-height: 47px;
     font-size: 18px;
   }
  
}
 .el-icon-arrow-left{
     width: 47px;
     height: 47px;
     font-size: 22px;
     text-align: center;
     line-height: 47px;
   }
   .nulld{
     width: 47px;
     height: 47px;
   }
</style>