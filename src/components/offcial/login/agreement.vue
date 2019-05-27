<template>
  <div class='agreement'>
    <div class="top">
      <p class="topTitle">法律免责声明</p>
      <div class="topCont">
        <div>一、本网站所刊发、转载的相关信息或图片来源于网络，旨在传递更多行业信息和交流之目的，若本网站无特别声明，其版权均归著作权人或页面内声明的版权人所有；但若本网站有明确声明，该信息为本网站单独或与作者共同享有版权，有关媒体、网站或个人如需使用，须取得本网站的书面授权，未经授权严禁转载或用于其它商业用途。</div>
        <div>二、若有关媒体、网站或个人从本网站下载使用作品案例、文章、图片等相关信息，请在转载、使用该等信息时务必尊重该信息的版权或相关权利，保留本网站注明的“来源于本站”，并自行承担版权、商标权等法律责任；若擅自篡改或以其他方式损害“北京九江东注网络科技有限公司”网站的相关信息，本网保留追究其法律责任的权利。</div>
        <div>三、本网站中相关信息的版权或相关权利仅归原作者所有，若作者有版权声明的或该信息从其它网站或媒体转载而附带有原所有站或媒体的版权声明者，其版权归属以附带声明为准。</div>
        <div>四、本网站在刊发相关信息或图片时，由于网络的特殊性，无法及时确认相关信息的权利人或与权利人取得联系；若任何单位或个人认为本网站信息内容可能涉嫌侵犯其合法权益，应该及时向本网站电话或书面反馈，并提供身份证明、权属证明及详细侵权情况证明，本网站在收到上述法律文件后，将会尽快根据相关法律规定采取妥善处理措施，及时消除影响。</div>
        <div>五、本网站范围内所有相关文章仅代表作者个人观点，与本网无关。其原创性以及文中陈述文字和内容未经本站证实，对本文以及其中全部或者部分内容、文字的真实性、完整性、及时性本站不作任何保证或承诺，请读者仅作参考，并请自行核实相关内容。</div>
        <div>六、凡本网没有注明文章或图片来源的相关信息，是本网工作人员转载于网络，是为学习交流使用，此类稿件不代表本网观点，本网不承担此类稿件侵权行为的连带责任。如转载稿件涉及版权等问题，请作者速与本网取得联系，本网将视实际情况予以及时删除处理。本网站内容原作者如不愿意在本网站刊登内容，请及时通知本站，本站将予以删除。</div>
      </div>
    </div>
    <div class="bottom">
      <p class="topTitle">其他事项声明</p>
      <div class="topCont">
        <div>1、本法律声明未涉及的问题参照国家有关法律法规规定，若本声明与国家法律法规冲突时，以国家法律法规为准。</div>
        <div>2、若因本网站产生任何诉诸于诉讼程序的法律争议，将以本网站所有者所在的法院为管辖法院，除非法律对此有强制性规定。</div>
      </div>
    </div>
    <div class="btn">
      <el-button type='primary' class='nowRegister' @click=back()>返回注册页面</el-button>
    </div>
  </div>
</template>
<script>
// import qs from 'qs'
export default {
  data () {},
  methods: {
    back () {
      window.history.back()
    }
  },
  mounted () {}
}
</script>
<style scoped>
.agreement{
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  background-color: #fff;
  background-image:url(../../../assets/img/login-inup/logo_gray.png);
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 10%;
  padding: 6.25rem 23rem 6.25rem 22.625rem;
}
.agreement .topTitle{
  font-size: 1.25rem;
  color: #02004b;
  margin-bottom: 2rem;
}
.agreement .topCont div{
  font-size: 1.125rem;
}
.agreement .top .topCont div{
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
}
.agreement .top .topCont div:last-child{
  margin-bottom: 2.5rem;
}
.agreement .btn{
  margin-top: 2rem;
  text-align: center;
}
.agreement .btn .nowRegister{
  margin:  0 auto;
}
</style>
<style>
</style>
