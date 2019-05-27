<template>
  <div class="caseDetail">
    <div class="top">
      <div class="logo">
        <img src="./../../../../../assets/img/ad4.png" alt="">
      </div>
      <div class="companyText">
        爱迪漫咖啡店内的咖啡饮品，均采用进口的咖啡豆，根据韩国咖啡烘焙师严格要求进行咖啡豆的烘焙、研磨、制作。漫咖啡用最专业的技术制作最优质的咖啡饮品，让每一位漫咖啡的客人品尝新鲜的咖啡。爱迪漫咖啡店内的waffle，是韩国与业甜品师现场烤制的，在金黄色的waffle上浇淋新鲜蔬果和冰激凌奶油，让您享受简单而营养丰富的甜品，味道妙不可言。Toast，更是经过对时间、温度严格要求而烘烤出来，表面呈金黄色的Toast喷洒上芳香的肉桂粉加焦糖让您品尝独特的酥脆与香甜。
      </div>
      <div class="from">属于行业：餐饮餐服</div>
    </div>
    <div class="center">
      <ul>
        <li><img src="./../../../../../assets/img/solutionCase/pro-allnet-banner.png" alt=""><div  class="lastChild"><img src="./../../../../../assets/img/512.png" alt=""></div></li>
      </ul>
    </div>
    <div class="bottom">
      <div class="bottomTile">推荐案例</div>
      <div class="bottomCont">
        <ul>
          <li>
            <img src="./../../../../../assets/img/solutionCase/pro-allnet-banner.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
ul{
  list-style: none;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix{
  clear: both;
  zoom: 1;
}
.clearfix:after {
  clear: both
}
.caseDetail{
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5.3125rem;
}
.caseDetail .top{
  margin: 0 auto;
}
.caseDetail .top .logo{
  margin: 0 auto;
}
.caseDetail .top .companyText{
  width: 65.375rem;
  margin:  0 auto;
  margin-top: 3.625rem;
  text-align: left;
  text-indent: 2rem;
  font-size: 1.25rem;
  color: #666;
  line-height: 2rem;
}
.caseDetail .top .from{
  width: 65.375rem;
  font-size: 1.125rem;
  color: #999;
  margin:  0 auto;
  margin-top: 1.875rem;
  text-align: left;
}
.caseDetail .center img{
  margin: 0 auto;
  width: 75rem;
  height: auto;
  margin-top: 3.75rem;
}
.caseDetail .center img:last-child{
  position: relative;
}
.caseDetail .center .lastChild{
  position: absolute;
  right: 0;
  top: 0;
  z-index: 800;
  background-color: rgba(0, 0, 0, .6)
}
.caseDetail .center .lastChild img{
  width: 50%;
}
.caseDetail .bottom{
  width: 75.0625rem;
  height: 11.4375rem;
  line-height: 11.4375rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  border: solid .0625rem #999999;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.caseDetail .bottom .bottomTile{
  font-size: 1.25rem;
  color: #02004b;
  text-align: left;
  margin-left: 1.4375rem;
  margin-right: 1.6875rem;
}
.caseDetail .bottom .bottomCont ul li{
  width: 12.5rem;
  height: 7.875rem;
  float: left;
  margin-right: 2rem;
}
.caseDetail .bottom .bottomCont ul li:last-child{
  margin-right: 0;
}
.caseDetail .bottom .bottomCont ul li img{
  width: 12.5rem;
  height: 7.875rem;
}
</style>
<style>
</style>
