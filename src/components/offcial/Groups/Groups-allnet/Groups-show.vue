<template>
  <div class="proAllnetShow">
    <div>
      <div class="banner">
        <p>集团站群</p>
        <p>提供统一管理，一次录用，多屏、多终端、多渠道发布</p>
      </div>
      <div class="tab">
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="产品优势" name="first">
              <div class="one clearfix">
                <div class="one_title">
                  <p class="one_titleBig">集团站群</p>
                  <div class="one_titleText">
                    <p>
                      适用于政府、集团企业、教育机构、媒体、金融等各类行业网站群、内外网门户建设。主要解决现阶段面临的信息传播方式多，信息录入需要多次重复录入，管理平台不统一的核心问题。覆盖电脑、微信、微网、手机、移动客户端多种渠道。提供统一管理，一次录入，多屏、多终端、多渠道发布。
                    </p>
                  </div>
                </div>
                <div class="oneTop clearfix">
                  <div class="banner1Text">
                    <p>集团站群多终端展示</p>
                    <p>响应式自动适配pc、手机、pad、TV等多端</p>
                  </div>
                  <div class="banner1right"><img src="../../../../assets/img/pro-allnet/response/detail-banner2-right.png" alt=""></div>
                  <div class="banner1left"><img src="../../../../assets/img/pro-allnet/response/detail-banner1-left.png" alt=""></div>
                </div>
                <div class="fourSuccessNo1">
                  <p class="one_titleBig">
                    集团站群四大优势
                  </p>
                  <el-row>
                    <el-col :span="6" :offset="4">
                      <div class="oneThreeListItem">
                        <p>集团类的功能灵活扩展</p>
                        <p>可扩展、可开放、可应用、与业务应用对接</p>
                      </div>
                    </el-col>
                    <el-col :span="5" :offset="4">
                      <div class="oneThreeListItem">
                        <p>集团子公司站群管理</p>
                        <p>多站点管理、子站独立域名</p>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row class="oneOnPadding">
                    <el-col :span="6" :offset="4">
                      <div class="oneThreeListItem">
                        <p>用户权限管理</p>
                        <p>自定义的审批机制与操作授权</p>
                      </div>
                    </el-col>
                    <el-col :span="5" :offset="4">
                      <div class="oneThreeListItem">
                        <p>一对一服务、响应及时</p>
                        <p>专人专责，7*24小时客服在线</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="oneThree clearfix">
                  <p class="title">不同行业的应用</p>
                  <div class="oneThreeList">
                    <div>
                      <el-row type="flex" justify="center">
                        <el-col :span="4"><div class="oneThreeListItem">装饰行业</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">教育行业</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">医疗器械</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">仪器仪表</div></el-col>
                      </el-row>
                    </div>
                    <div style="margin-top:2.5rem;">
                      <el-row type="flex" justify="center">
                        <el-col :span="4"><div class="oneThreeListItem">餐饮服务</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">酒店民宿</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">机械制造</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">建筑材料</div></el-col>
                      </el-row>
                    </div>
                    <div style="margin-top:2.5rem;">
                      <el-row type="flex" justify="center">
                        <el-col :span="4"><div class="oneThreeListItem">汽车零件</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">五金配件</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">电子电工</div></el-col>
                        <el-col :span="4"><div class="oneThreeListItem">家居家具</div></el-col>
                      </el-row>
                    </div>
                  </div>
                  <el-button type="primary" class="showMore">查看更多</el-button>
                </div>
                <div class="oneFore clearfix">
                  <p class="title">售后服务</p>
                  <div class="oneForeList">
                    <div>
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="oneForeListItem1 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>7*24小时服务热线</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem2 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>一对一专人维护</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem3 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>全年免费限次维修服务</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem4 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>网站交付满意为止</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    </div>
                </div>
                <div class="oneFive clearfix">
                  <p class="title">建站指南</p>
                  <div class="fiveCont">九江东注为您提供一站式建站服务：</div>
                  <div>
                    <div class="oneFiveLine">
                      <ul>
                        <li>
                          <div class="lineText">1</div>
                          <p>注册域名</p>
                        </li>
                        <li>
                          <div class="lineText">2</div>
                          <p>选择建站服务及主机</p>
                        </li>
                        <li>
                          <div class="lineText">3</div>
                          <p>域名解析</p>
                        </li>
                        <li>
                          <div class="lineText">4</div>
                          <p>网站备案</p>
                        </li>
                        <li>
                          <div class="lineText">5</div>
                          <p>http证书配置</p>
                        </li>
                        <li>
                          <div class="lineText">6</div>
                          <p>网站上线</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="oneSix clearfix">
                  <p class="title">咨询价格</p>
                  <div class="sixCont">
                    <el-form  ref="form" :rules="rules" :model="form" label-width="86px">
                      <div style="width:60%" class="fd">
                        <el-form-item label="客户需求:">
                          <el-input type = "textarea" v-model="form.text" maxlength="200" show-word-limit="true" resize="none" rows='6'  placeholder="请详细说明"></el-input>
                        </el-form-item>
                      </div>
                      <div style="width:50%" class="fd"></div>
                      <div style="width: 28%" class="fd">
                        <el-form-item label=" 手机号:" prop="mobile">
                          <el-input v-model="form.mobile" clearable></el-input>
                        </el-form-item>
                      </div>
                      <div style="width: 40%;margin-left:10%" class="fd">
                        <el-form-item label="公司名称:" prop="company">
                          <el-input v-model="form.company" clearable></el-input>
                        </el-form-item>
                      </div>
                      <div style="float: left;margin-left:20%;margin-top:2%" class="fd">
                        <el-form-item>
                          <el-button type="primary" class="informaLeftBtn" @click="informaLeftBtn">咨询价格</el-button>
                          <!-- <el-button class="informaRightBtn" @click="informaRightBtn">现在咨询</el-button> -->
                          <a href="tencent://message/?uin=3615670372&Menu=yes" class="informaRightBtn">现在咨询</a>
                        </el-form-item>
                      </div>
                    </el-form>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="产品报价" name="second">
              <div class="two clearfix">
                <div class="twoPrice">
                  <div class="priceOne">
                    <div class="priceOneLeft"><div class="leftText">基础型套餐</div></div>
                    <div class="priceOneRight">
                      <div class="tableCont">
                        <ul>
                          <li class="table1">7导航栏/15个内页</li>
                          <li class="table1">赠送国际域名一个</li>
                          <li class="table1">文档下载/在线咨询/在线留言</li>
                        </ul>
                        <ul>
                          <li class="table1">一站式多终端展示</li>
                          <li class="table1">储存空间不限</li>
                          <li class="table1">适应于企业展示宣传</li>
                        </ul>
                        <ul>
                          <li class="table1">响应式多端单次设计</li>
                          <li class="table1">企业介绍/产品图片/新闻资讯</li>
                          <li class="table1">支持SEO优化推广</li>
                        </ul>
                      </div>
                    </div>
                    <div class="priceOneBtn" @click="JumpPackageOfferOne">套餐价格</div>
                  </div>
                  <div class="priceOne">
                    <div class="priceOneLeft"><div class="leftText">经济型套餐</div></div>
                    <div class="priceOneRight">
                      <div class="tableCont">
                        <ul>
                          <li class="table1">15导航栏目/25个内页</li>
                          <li class="table1">赠送国际域名一个</li>
                          <li class="table1">文档下载/在线咨询/在线留言</li>
                        </ul>
                        <ul>
                          <li class="table1">一站式多终端展示</li>
                          <li class="table1">储存空间不限</li>
                          <li class="table1">banner图设计3张/产品图片30张</li>
                        </ul>
                        <ul>
                          <li class="table1">响应式多端单次设计</li>
                          <li class="table1">企业介绍/产品图片/新闻资讯</li>
                          <li class="table1">支持SEO优化推广</li>
                        </ul>
                      </div>
                    </div>
                    <div class="priceOneBtn" @click="JumpPackageOfferTwo">套餐价格</div>
                  </div>
                  <div class="priceOne">
                    <div class="priceOneLeft"><div class="leftText">经济型套餐</div></div>
                    <div class="priceOneRight">
                      <div class="tableCont">
                        <ul>
                          <li class="table1">25导航栏/35个内页</li>
                          <li class="table1">赠送国际域名一个</li>
                          <li class="table1">文档下载/在线咨询/在线留言</li>
                        </ul>
                        <ul>
                          <li class="table1">一站式多终端展示</li>
                          <li class="table1">储存空间不限</li>
                          <li class="table1">banner图设计6张/产品图片50张</li>
                        </ul>
                        <ul>
                          <li class="table1">响应式多端单次设计</li>
                          <li class="table1">企业介绍/产品图片/新闻资讯</li>
                          <li class="table1">支持SEO优化推广</li>
                        </ul>
                      </div>
                    </div>
                    <div class="priceOneBtn" @click="JumpPackageOfferThree">套餐价格</div>
                  </div>
                  <div class="priceOne">
                    <div class="priceOneLeft"><div class="leftText">经济型套餐</div></div>
                    <div class="priceOneRight">
                      <div class="tableCont">
                        <ul>
                          <li class="table1">35导航栏/60个内页</li>
                          <li class="table1">赠送国际域名一个</li>
                          <li class="table1">文档下载/在线咨询/在线留言</li>
                        </ul>
                        <ul>
                          <li class="table1">一站式多终端展示</li>
                          <li class="table1">储存空间不限</li>
                          <li class="table1">banner图设计10张/产品图片100张</li>
                        </ul>
                        <ul>
                          <li class="table1">响应式多端单次设计</li>
                          <li class="table1">企业介绍/产品图片/新闻资讯</li>
                          <li class="table1">支持SEO优化推广</li>
                        </ul>
                      </div>
                    </div>
                    <div class="priceOneBtn" @click="JumpPackageOfferFour">套餐价格</div>
                  </div>
                </div>
                <div class="oneFore clearfix">
                  <p class="title">售后服务</p>
                  <div class="oneForeList">
                    <div>
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="oneForeListItem1 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>7*24小时服务热线</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem2 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>一对一专人维护</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem3 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>全年免费限次维修服务</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem4 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>网站交付满意为止</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    </div>
                </div>
                <div class="oneFive clearfix">
                  <p class="title">建站指南</p>
                  <div class="fiveCont">九江东注为您提供一站式建站服务：</div>
                  <div>
                    <div class="oneFiveLine">
                      <ul>
                        <li>
                          <div class="lineText">1</div>
                          <p>注册域名</p>
                        </li>
                        <li>
                          <div class="lineText">2</div>
                          <p>选择建站服务及主机</p>
                        </li>
                        <li>
                          <div class="lineText">3</div>
                          <p>域名解析</p>
                        </li>
                        <li>
                          <div class="lineText">4</div>
                          <p>网站备案</p>
                        </li>
                        <li>
                          <div class="lineText">5</div>
                          <p>http证书配置</p>
                        </li>
                        <li>
                          <div class="lineText">6</div>
                          <p>网站上线</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="oneSix clearfix">
                  <p class="title">咨询价格</p>
                  <div class="sixCont">
                    <el-form  ref="form" :rules="rules" :model="form" label-width="86px">
                      <div style="width:60%" class="fd">
                        <el-form-item label="客户需求:">
                          <el-input type = "textarea" v-model="form.text" maxlength="200" show-word-limit="true" resize="none" rows='6'  placeholder="请详细说明"></el-input>
                        </el-form-item>
                      </div>
                      <div style="width:50%" class="fd"></div>
                      <div style="width: 28%" class="fd">
                        <el-form-item label=" 手机号:" prop="mobile">
                          <el-input v-model="form.mobile" clearable></el-input>
                        </el-form-item>
                      </div>
                      <div style="width: 40%;margin-left:10%" class="fd">
                        <el-form-item label="公司名称:" prop="company">
                          <el-input v-model="form.company" clearable></el-input>
                        </el-form-item>
                      </div>
                      <div style="float: left;margin-left:20%;margin-top:2%" class="fd">
                        <el-form-item>
                          <el-button type="primary" class="informaLeftBtn" @click="informaLeftBtn">咨询价格</el-button>
                          <!-- <el-button class="informaRightBtn" @click="informaRightBtn">现在咨询</el-button> -->
                          <a href="tencent://message/?uin=1042942029&Menu=yes" class="informaRightBtn">现在咨询</a>
                        </el-form-item>
                      </div>
                    </el-form>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="产品功能" name="third">
              <div class="three clearfix">
                <div class="threeOne clearfix">
                  <p class="title">集团站群功能</p>
                  <div class="threeThrdeeList">
                    <div>
                      <el-row type="flex" justify="center">
                        <el-col :span="6" :offset="2">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">频道管理</p>
                            <p class="onNoThreeListItem-text2">支持不同频道类型的增加、修改、删除</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">自动采集</p>
                            <p class="onNoThreeListItem-text2">提供数据库采集功能，自动进行</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">站群管理</p>
                            <p class="onNoThreeListItem-text2">支持网站统一维护、分级授权管理</p>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row type="flex" justify="center" style="margin-top:2.625rem;">
                        <el-col :span="6" :offset="2">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">内容管理</p>
                            <p class="onNoThreeListItem-text2">提供针对不同类型的信息内容进行管理</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">工作流程</p>
                            <p class="onNoThreeListItem-text2">支持控制文档流转的自定义流程</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">组图采编</p>
                            <p class="onNoThreeListItem-text2">支持图片信息的采编</p>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div v-if='yesShow == 2' style="margin-top:2.625rem">
                      <el-row type="flex" justify="center">
                        <el-col :span="6" :offset="2">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">权限管理</p>
                            <p class="onNoThreeListItem-text2">支持菜单权限、频道权限、操作权限的管理</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">自由表单</p>
                            <p class="onNoThreeListItem-text2">支持各种表现形式，可灵活定制表单</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">可视化模板</p>
                            <p class="onNoThreeListItem-text2">支持所见即所得的可视化模板操作</p>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row type="flex" justify="center" style="margin-top:2.625rem;">
                        <el-col :span="6" :offset="2">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">静态发布</p>
                            <p class="onNoThreeListItem-text2">支持站点的静态化发布功能</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">统计分析</p>
                            <p class="onNoThreeListItem-text2">支持统计网站信息的发布量</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">政务公开</p>
                            <p class="onNoThreeListItem-text2">实现主动公开与依申请公开的政务信息</p>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row type="flex" justify="center" style="margin-top:2.625rem;">
                        <el-col :span="6" :offset="2">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">访谈直播</p>
                            <p class="onNoThreeListItem-text2">支持在线访谈直播管理，创建在线访谈直播栏目</p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">投票调查</p>
                            <p class="onNoThreeListItem-text2">提供单主题和多主题投票调查系统 </p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="onNoThreeListItem">
                            <p class="onNoThreeListItem-text1">全文检索</p>
                            <p class="onNoThreeListItem-text2">支持可定制的全文检索功能</p>
                          </div>
                        </el-col>
                      </el-row>
                  </div>
                  <div v-else>
                    <el-button type="primary" class="showMore" @click="YesShowNo">查看更多</el-button>
                  </div>
                </div>
                <div class="TwoNoListItem">
                  <p class="title" style="margin-bottom:2rem;">技术服务保障</p>
                  <el-row type="flex" justify="center">
                    <el-col :span="4">
                      <div class="TwoNoThreeListItem">
                        <p class="TwoNoThreeListItem-text1">网站后台安全</p>
                        <p class="TwoNoThreeListItem-text2">支持在线对网站进行不定整站备份、数据库备份、文件备份和恢复备份操作，不担心数据丢失。支持后台网址隐藏、漏洞检测24小时补丁更新，提高网站安全性能。</p>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="TwoNoThreeListItem">
                        <p class="TwoNoThreeListItem-text1">服务器安全</p>
                        <p class="TwoNoThreeListItem-text2">跟国内知名服务商（阿里云、百度云、腾讯云、新网）签订了战略合作协议，确保网站的稳定性和安全性。专业技术团队提供Linux、CentOS、Ubuntu系统等安装维护，并对服务器常规端口进行修改，避免端口被恶意攻击</p>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="TwoNoThreeListItem">
                        <p class="TwoNoThreeListItem-text1">Web漏洞检测</p>
                        <p class="TwoNoThreeListItem-text2">实时对网站漏洞进行检测扫描，实时短信提示和漏洞补丁更新。对常见的SQL注入、Webshell上传 、命令注入和非法请求等攻击进行了基本防护。快速修复0day漏洞虚拟补丁，避免网站服务器被恶意入侵等异常问题</p>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="TwoNoThreeListItem">
                        <p class="TwoNoThreeListItem-text1">安全卫士</p>
                        <p class="TwoNoThreeListItem-text2">运用第三方安全应用技术，提高网站安全属性，服务器的贴身安全卫士。为您提供朱继漏洞检测、基线检查、病毒查杀、实时监测，支持一键漏洞修复，一键病毒隔离，为您解决网站安全问题。</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="oneFore clearfix">
                  <p class="title">售后服务</p>
                  <div class="oneForeList">
                    <div>
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="oneForeListItem1 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>7*24小时服务热线</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem2 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>一对一专人维护</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem3 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>全年免费限次维修服务</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneForeListItem4 oneForeListItem">
                            <div class="listItemImg"></div>
                            <span>网站交付满意为止</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    </div>
                </div>
                <div class="oneFive clearfix">
                  <p class="title">建站指南</p>
                  <div class="fiveCont">九江东注为您提供一站式建站服务：</div>
                  <div>
                    <div class="oneFiveLine">
                      <ul>
                        <li>
                          <div class="lineText">1</div>
                          <p>注册域名</p>
                        </li>
                        <li>
                          <div class="lineText">2</div>
                          <p>选择建站服务及主机</p>
                        </li>
                        <li>
                          <div class="lineText">3</div>
                          <p>域名解析</p>
                        </li>
                        <li>
                          <div class="lineText">4</div>
                          <p>网站备案</p>
                        </li>
                        <li>
                          <div class="lineText">5</div>
                          <p>http证书配置</p>
                        </li>
                        <li>
                          <div class="lineText">6</div>
                          <p>网站上线</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="oneSix clearfix">
                  <p class="title">咨询价格</p>
                  <div class="sixCont">
                    <el-form  ref="form" :rules="rules" :model="form" label-width="86px">
                      <div style="width:60%" class="fd">
                        <el-form-item label="客户需求:">
                          <el-input type = "textarea" v-model="form.text" maxlength="200" show-word-limit="true" resize="none" rows='6'  placeholder="请详细说明"></el-input>
                        </el-form-item>
                      </div>
                      <div style="width:50%" class="fd"></div>
                      <div style="width: 28%" class="fd">
                        <el-form-item label=" 手机号:" prop="mobile">
                          <el-input v-model="form.mobile" clearable></el-input>
                        </el-form-item>
                      </div>
                      <div style="width: 40%;margin-left:10%" class="fd">
                        <el-form-item label="公司名称:" prop="company">
                          <el-input v-model="form.company" clearable></el-input>
                        </el-form-item>
                      </div>
                      <div style="float: left;margin-left:20%;margin-top:2%" class="fd">
                        <el-form-item>
                          <el-button type="primary" class="informaLeftBtn" @click="informaLeftBtn">咨询价格</el-button>
                          <el-button class="informaRightBtn" @click="informaRightBtn">现在咨询</el-button>
                        </el-form-item>
                      </div>
                    </el-form>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="案例展示" name="fourth">
              <div class="four clearfix">
                <div class="fourOne">
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/show/four-banner-1.png" alt=""></div>
                  <div class="fourOneText">
                    <div><img style="width: 10.75rem;height: 2.875rem;" src="../../../../assets/img/pro-allnet/show/four-logo-1.png" alt=""></div>
                    <div class="linkA"><a href="http://www.aoyom.cc/">http://www.aoyom.cc/</a></div>
                    <div class="fourTextCont">AOYOM澳优美厨卫（中国）是一家集研发设计、模具制造、成品生产和市场营销于一体的卫浴企业，经过多年的厨卫行业沉淀与发展，澳优美厨卫现已发展成为一家规模化的厨卫企业，公司生产销售合金制品水龙头、厨房水龙头、淋浴花洒、浴室挂件各种卫浴零配件等洁具产品，是中国卫浴行业具有规模化、专业化的厨卫生产企业之一。</div>
                  </div>
                </div>
                <div class="fourTwo">
                  <div class="fourOneText">
                    <div><img style="width: 11.9375rem;height: 3.1875rem;" src="../../../../assets/img/pro-allnet/show/four-logo-2.png" alt=""></div>
                    <div class="linkA"><a href="http://www.jzyxl.com/">http://www.jzyxl.com/</a></div>
                    <div class="fourTextCont">北京金正永信科技有限公司位于北京市海淀区永丰高新技术产业基地，成立于2004年，是一家专业生产钕铁硼自动打孔机、自动化非标设备、超大型工件加工、注塑模具、冲压模具、机械加工、钣金件、模组、滑台的股份制企业。 公司生产工艺先进，技术力量雄厚。拥有各种高速、精密的加工设备、加工中心、数控车、激光切割、数控线切割，数控电火花、折弯机、剪板机、车、铣、刨、磨、冲等设备。</div>
                  </div>
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/show/four-banner-2.png" alt=""></div>
                </div>
                <div class="fourThree">
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/show/four-banner-3.png" alt=""></div>
                  <div class="fourOneText">
                    <div><img style="height:2.8125rem;width: 12.25rem;" src="../../../../assets/img/pro-allnet/show/four-logo-3.png" alt=""></div>
                    <div class="linkA"><a href="http://www.cqsjhc.com/">http://www.cqsjhc.com/</a></div>
                    <div class="fourTextCont">重庆沈洪存餐饮管理有限公司旗下品牌重庆沈家洪城老火锅，经过三辈人的传承和近百年的发展，从1个店发展到全国302家店，从单店经营发展到公司连锁经营，公司现已是集技术研发、底料加工生产、直营店经营、餐饮连锁加盟、物流配送等专业化的餐饮管理公司。</div>
                  </div>
                </div>
                <div class="fourFour">
                  <div class="fourOneText">
                    <div><img style="width: 10.9375rem;height: 3.1875rem;" src="../../../../assets/img/pro-allnet/show/four-logo-4.png" alt=""></div>
                    <div class="linkA"><a href="http://www.zszrzm.com/">http://www.zszrzm.com/</a></div>
                    <div class="fourTextCont">中山市正日照明有限公司位于中外闻名的中国灯饰之都古镇镇。公司秉承创新、开拓精神，把握市场需求，不断推陈楚新，吸取国内外同行先进的制作技术、加工工艺和经营理念。凭借雄厚的资金实力、完善的生产能力、优秀的专业人才、过硬的产品质量，积极参与国内外城市道路、加工工艺和经营理念。凭借雄厚的资金实力、完善的生产能力、优秀的专业人才、过硬的产品质量，积极参与国内外城市道路、小区照明等建设工程，销售网络遍及全国各地。</div>
                  </div>
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/show/four-banner-4.png" alt=""></div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    var checkMobile = (rule, value, callback) => {
      setTimeout(() => {
        if (!(/^1(3|4|6|5|7|8)\d{9}$/.test(value))) {
          callback(new Error('请输入正确手机号'))
        }
      }, 500)
    }
    return {
      activeName: 'first',
      yesShow: '',
      form: {
        text: '',
        mobile: '',
        company: ''
      },
      rules: {
        mobile: [
          { required: true, message: '请填写您的手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请填写您的公司名称', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    let list = document.querySelectorAll('.table1')
    console.log(list)
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    YesShowNo () {
      this.yesShow = '2'
    },
    informaLeftBtn () {
      console.log(this.form, '99999')
      let mobile = this.form.mobile
      let text = this.form.text
      let company = this.form.company
      if (mobile === '' || text === '' || company === '' || mobile.length !== 11) {
        this.$message.error('请填写完整哦')
        return
      }
      let that = this
      that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Home/Need/NeedAdd', qs.stringify({'phone': mobile, 'company': company, 'content': text})).then(function (res) {
        console.log('提交了', res)
        if (res.data.state === '200') {
          that.$message({
            type: 'success',
            message: '您的需求已经发送，请耐心等待专员联系您'
          })
          that.form.mobile = ''
          that.form.text = ''
          that.form.company = ''
        } else if (res.data.state === '500') {
          that.$message.error('服务内部错误,请联系我们')
        }
      })
    },
    JumpPackageOfferOne () {
      let that = this
      that.$router.push({
        name: 'PackageOffer',
        params: {
          combo: '基础型套餐'
        }
      })
    },
    JumpPackageOfferTwo () {
      let that = this
      that.$router.push({
        name: 'PackageOffer',
        params: {
          combo: '经济型套餐'
        }
      })
    },
    JumpPackageOfferThree () {
      let that = this
      that.$router.push({
        name: 'PackageOffer',
        params: {
          combo: '经济型套餐'
        }
      })
    },
    JumpPackageOfferFour () {
      let that = this
      that.$router.push({
        name: 'PackageOffer',
        params: {
          combo: '经济型套餐'
        }
      })
    },
    informaRightBtn () {
    }
  }
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
.proAllnetShow .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url(../../../../assets/img/pro-allnet/show/pro-allnet-banner.png);
  background-size: cover;
  text-align: left;
  padding: 9.125rem 0  9.25rem 23rem;
}
.proAllnetShow .banner p:first-child{
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 2rem;
}
.proAllnetShow .banner p:last-child{
  font-size: 1rem;
  color: #ffffff;
}
/* 产品优势  第一部分*/
.title{
  color: #333333;
  font-size: 1.875rem;
}
.one .oneTop{
  width: 100%;
  margin: 0 auto;
  margin-top: 6rem;
  margin-bottom: 6rem;
  line-height: 29rem;
  padding: 2rem 0rem 9rem 0rem;
  display: flex;
  justify-content: center;
  justify-items: center;
  background-color:#d7d7d7;
}
.one .oneTop .banner1left{
  height: 14rem;
}
.one .oneTop .banner1left img{
  width: 23.625rem;
  height: 19rem;
  vertical-align: 60%;
}
.one .oneTop .banner1right{
  height: 11rem;
  margin-left:4rem;
}
.one .oneTop .banner1right img{
  width:27.3125rem;
  height: 4rem;
  vertical-align: 10%;
}
.one .oneTop .banner1right img{
  width:27.3125rem;
  height: 4rem;
  vertical-align: 10%;
}
.one .oneTop .banner1Text{
  height: 11rem;
  text-align: center;
  margin-left: 1rem;
  padding-top: 2%;
}
.one .oneTop .banner1Text p:first-child{
  font-size: 2rem;
  color: #333;
  line-height: 10rem;
}
.one .oneTop .banner1Text p:last-child{
  font-size: 1rem;
  line-height: 0rem;
  color: #333;
}
/*  产品优势  第二部分 */
.oneTwo{
  height: 37rem;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top:4rem;
  background-image: url(../../../../assets/img/pro-allnet/show/detail-banner2.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.oneTwo>p{
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 5rem;
}
.oneTwo .oneTwoCard{
  width: 100%;
  display: flex;
  justify-content: center;
}
.oneTwo .oneTwoCard .twoCardLi{
  width: 11rem;
  height: 13.6rem;
  padding:3.125rem 2rem 3.125rem 2rem;
  border: solid .125rem transparent;
}
.oneTwo .oneTwoCard .twoCardLi img{
}
.oneTwo .oneTwoCard .twoCardLi:hover{
  border-radius: 1rem;
  border: solid .125rem #ffffff;
}
.oneTwo .oneTwoCard .twoCardLiText{
  margin-top: 3.6rem;
  width: 13.75rem;
  height: 18.375rem;
  color: #ffffff;
  font-size: .875rem;
  letter-spacing: .0625rem;
  text-align: left;
}
.oneTwo .oneTwoCard .twoCardLiText p:first-child{
  font-size: 1.25rem;
  letter-spacing: .125rem;
  margin-bottom: 1.1875rem;
}
.oneTwo .oneTwoCard .twoCardLiText p:nth-child(2){
  margin-bottom: 1rem;
}
.oneTwo .oneTwoCard .twoCardLiText p:nth-child(3){
  margin-bottom: 1rem;
}
/* 产品优势  第三部分 */
.oneThree{
  margin: 0 auto;
  padding: 6.1875rem 0 0 0;
}
.oneThree .oneThreeList{
  margin: 0 auto;
  margin-top: 3.6875rem
}
.oneThree .oneThreeList .oneThreeListItem{
  float: left;
  width: 94%;
  height: 90%;
  box-sizing: border-box;
  font-size: 1.25rem;
  line-height: 280%;
  background-color: #ffffff;
  color: #666;
  border-radius: .625rem;
  margin-right: 6%;
  border: solid .0625rem #cbcbcb;
  cursor: pointer;
}
.oneThree .oneThreeList .oneThreeListItem:hover{
  color: #02004b;
  border: solid .0625rem #02004b;
}
.oneThree .showMore{
  margin-top: 1.875rem;
  background-color: #02004b;
  border: transparent;
}
/* 产品优势 第四部分 */
.oneFore{
  margin: 0 auto;
  padding: 6.1875rem 0rem 0 0rem;
}
.oneFore .oneForeList{
  margin: 0 auto;
  margin-top: 3.6875rem;
}
.oneFore .oneForeListItem{
  float: left;
  width: 97%;
  height: 90%;
  box-sizing: border-box;
  font-size: 1.2rem;
  line-height: 5.14rem;
  background-color: transparent;
  color: #666;
  border-radius: .625rem;
  margin-right: 6%;
  border: solid .0625rem #d7d7d7;
}
.oneFore .oneForeListItem1{
  background-image: url(../../../../assets/img/service1.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.oneFore .oneForeListItem1:hover{
  background-image: url(../../../../assets/img/service1-blue.png);
}
.oneFore .oneForeListItem2{
  background-image: url(../../../../assets/img/service2.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.oneFore .oneForeListItem2:hover{
  background-image: url(../../../../assets/img/service2-blue.png);
}
.oneFore .oneForeListItem3{
  background-image: url(../../../../assets/img/service3.png);
  background-repeat: no-repeat;
  background-position: 5% 50%;
}
.oneFore .oneForeListItem3:hover{
  background-image: url(../../../../assets/img/service3-blue.png);
}
.oneFore .oneForeListItem4{
  background-image: url(../../../../assets/img/service4.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.oneFore .oneForeListItem4:hover{
  background-image: url(../../../../assets/img/service4-blue.png);
}
.oneFore .oneForeListItem:hover{
  border: solid .0625rem #02004b;
  color: #02004b;
}
.oneFore .oneForeListItem .listItemImg{
  height: 1.875rem;
  width: 1.875rem;
  vertical-align: middle;
  display: inline-block;
}
/* 产品优势 第五部分 */
.oneFive{
  margin: 0 auto;
  padding: 6.1875rem 18% 6.0625rem 18%;
}
.oneFive .fiveCont{
  margin-top: 3.5rem;
  margin-bottom: 4.375rem;
  text-align: left;
}
.oneFive .oneFiveLine{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.oneFive .oneFiveLine::before{
  content: "";
  position: absolute;
  left: 7%;
  right: 7%;
  height: 8px;
  background-color: #02004b;
  border-radius: 4px;
  z-index: 1;
}
.oneFive .oneFiveLine ul{

}
.oneFive .oneFiveLine li{
  /* width: 4.75rem; */
  height: 4.75rem;
  float: left;
  margin-right: 7.5rem;
  border-radius: 50%;
  background-color: transparent;
  opacity: 1;
  z-index: 99;
  position: relative;
  cursor: pointer;
}
.oneFive .oneFiveLine li:last-child{
  margin-right: 0
}
.oneFive .oneFiveLine li p{
  font-size: 0.8rem;
  color: #666;
}
.oneFive .oneFiveLine .lineText{
  width: 4.75rem;
  height: 4.75rem;
  margin: 0 auto;
  box-sizing: border-box;
  line-height: 160%;
  font-size: 1.875rem;
  border: 0.85rem solid #fff;
  background-color: #02004b;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  margin-bottom: 1.3125rem;
  background-clip:padding-box;
}
.oneFive .oneFiveLine .lineText:hover{
  border: 0.85rem solid rgba(2, 0, 75, 0.44);
}
/* 产品优势 第六部分 */
.oneSix{
  margin: 0 auto;
}
.oneSix>p{
  margin-bottom: 3.6875rem;
}
.sixCont{
  margin: 0 auto;
  width: 62.9375rem;
  height: 23.5rem;
}
.sixCont .fd{
 display:inline-block;
 float:left;
}
.sixCont .informaLeftBtn{
  width: 10rem;
  height: 3.125rem;
  background-color: #02004b;
  border-color: transparent;
  border-radius: .625rem;
  margin-right:3.125rem;
}
.sixCont .informaRightBtn{
  display: inline-block;
  width: 10rem;
  height: 3.125rem;
  line-height: 3.125rem;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  border-radius: .625rem;
  border: solid .0625rem #02004b;
}
.sixCont .informaRightBtn:hover{
  color:#02004b;
}
/* 产品报价 价格部分 */
.two .twoPrice{
  margin: 0 auto;
}
.two .twoPrice .priceOne{
  margin:0 auto;
  padding-top: 6.9375rem;
}
.two .priceOneLeft{
  width: 4.375rem;
  height: 13rem;
  box-sizing: border-box;
  display:inline-block;
  margin: 0 auto;
  color:#fff;
  background-color: #8be0ff;
  border-radius: .625rem 0px 0px .625rem;
  padding: 2.25rem 1.5rem 2.25rem 1.5rem;
}
.two .priceOne:nth-child(2) .priceOneLeft{
  background-color: #8ba6ff;
}
.two .priceOne:nth-child(3) .priceOneLeft{
  background-color: #9b8bff;
}
.two .priceOne:nth-child(4) .priceOneLeft{
  background-color: #eb8bff;
}
.two .priceOneLeft .leftText{
  width: 1.0rem;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 1.7rem;
}
.two .priceOneRight{
  vertical-align:top;
  display: inline-block;
}
.borderChange{
  border-color: #02004b;
}
.two .priceOneRight ul{
  width: 23.125rem;
  height: 13.1875rem;
  box-sizing: border-box;
  display: inline-block;
}
.two .priceOneRight ul .table1{
  height: 4.25rem;
  width: 100%;
  line-height: 4.25rem;
  text-align: center;
  border: .0625rem solid #999;
}
.two .priceOneRight ul .table1:last-child{
  border-top: none
}
.two .priceOneRight ul .table1:nth-child(2){
  border-top: none;
}
.priceOneBtn{
  width: 9.375rem;
  height: 3.125rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  line-height: 3.125rem;
  background-color: #ffffff;
  border-radius: 0.625rem;
  color: #ff0000;
  border: solid .0625rem #ff0000;
  opacity: 0.64;
}
/* 产品功能 功能模块 */
.three{
  margin: 0 auto;
}
.three .threeOne{
  margin: 0 auto;
  padding-top: 6.1875rem;
}
.three .threeThrdeeList{
  margin: 0 auto;
  margin-top: 3.6875rem
}
.three .threeThrdeeList .oneThreeListItem{
  float: left;
  width: 70%;
  height: 90%;
  box-sizing: border-box;
  font-size: 1.25rem;
  line-height: 280%;
  background-color: #ffffff;
  color: #666;
  border-radius: .625rem;
  border: solid .0625rem #cbcbcb;
  cursor: pointer;
}
.three .threeThrdeeList .oneThreeListItem:hover{
  color: #02004b;
  border: solid .0625rem #02004b;
}
.three .showMore{
  margin-top: 1.875rem;
  background-color: #02004b;
  border: transparent;
}
.three .listItemImg{
  height: 1.875rem;
  width: 1.875rem;
  vertical-align: middle;
  display: inline-block;
}
.three .threeOneListItem{
  float: left;
  width: 80%;
  height: 90%;
  box-sizing: border-box;
  font-size: 1.2rem;
  line-height: 5rem;
  background-color: transparent;
  color: #999;
  border-radius: .625rem;
  border: solid .0625rem #d7d7d7;
}
.three .threeOneListItem:hover{
  color: #02004b;
  border: solid .0625rem #02004b;
}
.three .threeListItem1-1{
  background-image: url(../../../../assets/img/pro-allnet/threeTop1-1.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem1-1:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop1-1-blue.png);
}
.three .threeListItem1-2{
  background-image: url(../../../../assets/img/pro-allnet/threeTop1-2.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem1-2:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop1-2-blue.png);
}
.three .threeListItem1-3{
  background-image: url(../../../../assets/img/pro-allnet/threeTop1-3.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem1-3:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop1-3-blue.png);
}
.three .threeListItem2-1{
  background-image: url(../../../../assets/img/pro-allnet/threeTop2-1.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem2-1:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop2-1-blue.png);
}
.three .threeListItem2-2{
  background-image: url(../../../../assets/img/pro-allnet/threeTop2-2.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem2-2:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop2-2-blue.png);
}
.three .threeListItem2-3{
  background-image: url(../../../../assets/img/pro-allnet/threeTop2-3.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem2-3:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop2-3-blue.png);
}
.three .threeListItem3-1{
  background-image: url(../../../../assets/img/pro-allnet/threeTop3-1.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem3-1:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop3-1-blue.png);
}
.three .threeListItem3-2{
  background-image: url(../../../../assets/img/pro-allnet/threeTop3-2.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem3-2:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop3-2-blue.png);
}
.three .threeListItem3-3{
  background-image: url(../../../../assets/img/pro-allnet/threeTop3-3.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem3-3:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop3-3-blue.png);
}
.three .threeListItem4-1{
  background-image: url(../../../../assets/img/pro-allnet/threeTop4-1.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem4-1:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop4-1-blue.png);
}
.three .threeListItem4-2{
  background-image: url(../../../../assets/img/pro-allnet/threeTop4-2.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem4-2:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop4-2-blue.png);
}
.three .threeListItem4-3{
  background-image: url(../../../../assets/img/pro-allnet/threeTop4-3.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem4-3:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop4-3-blue.png);
}
/* 案例展示 */
.four{
  margin: 0 auto;
  background: url(../../../../assets/img/pro-allnet/logo_gray.png) no-repeat center top;
  padding: 6.25rem 22.5625rem 6.25rem 22.5rem;
}
.four .fourOne{
  margin: 0 auto;
}
.four .fourOne>div{
  display: inline-block;
}
.four .fourOneText{
  display: inline-block;
  margin-left:3.75rem;
  vertical-align: top;
  padding-top: 1.875rem;
}
.four .fourOneText .linkA{
  font-size: 1.3125rem;
  margin-top: 1.875rem;
  margin-bottom: 1.6875rem;
}
.four  .fourOneText .linkA a{
  color: #02004b;
}
.four .fourOneText .fourTextCont{
  width: 32.625rem;
  height: auto;
  font-size: 1rem;
  color: #666;
  text-align: left;
  text-indent:2em;
  line-height: 1.5rem;
}
.four .fourTwo{
  margin-top: 5.5rem;
}
.four .fourTwo .fourOneText{
  display: inline-block;
  margin-right:3.75rem;
  vertical-align: top;
  padding-top: 1.875rem;
}
.four .fourThree{
  margin-top: 5.5rem;
}
.four .fourFour{
  margin-top: 5.5rem;
}
.one_title{
  text-align: center;
  display: inline-block;
  margin:0 auto;
}
.one_title .one_titleBig{
  font-size: 1.875rem;
  margin-bottom: 3.5625rem;
  margin-top: 6.25rem;
  font-family: PingFang-SC-Medium;
  line-height: 30px;
}
.one_title .one_titleText{
  width:74.3125rem;
  height:5.0625rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
}
.fourSuccessNo1 .one_titleBig{
  font-size: 1.875rem;
  margin-bottom: 3.5625rem;
  margin-top: 6.25rem;
  font-family: PingFang-SC-Medium;
  line-height: 30px;
}
.fourSuccessNo1 .oneThreeListItem{
  float: left;
  width: 28.75rem;
  box-sizing: border-box;
  font-size: 1.25rem;
  line-height: 280%;
  background-color: #ffffff;
  color: #02004b;
  border-radius: 1.25rem;
  margin-right: 6%;
  border: solid .0625rem #cbcbcb;
  cursor: pointer;
  padding: 0.7rem;
}
.fourSuccessNo1 .oneThreeListItem:hover{
  color: #02004b;
  border: solid .0625rem #02004b;
}
.fourSuccessNo1 .oneOnPadding{
  margin-top: 3.75rem;
  margin-left: 2rem;
}
.onNoThreeListItem{
  width:19.375rem;
  height:4.9375rem;
  background-color:#fff;
  border: solid .0625rem #999999;
  border-radius: 1.25rem;
  color:#666666;
}
.onNoThreeListItem:hover{
  color:#02004b;
  border-color:#02004b;
}
.onNoThreeListItem  .onNoThreeListItem-text1{
  font-size: 1.125rem;
  line-height: 1.875rem;
  padding-left: 1rem;
  margin-top:0.5rem;
}
.onNoThreeListItem  .onNoThreeListItem-text2{
  font-size: .875rem;
  line-height: 2.875rem;
  padding-left: 1rem;
}
.TwoNoListItem{
  margin-top:7.375rem;
}
.TwoNoThreeListItem{
  width:17rem;
  height:26rem;
  background-color:#fff;
  border: solid .0625rem #999999;
  border-radius: 1.25rem;
  color:#666666;
}
.TwoNoThreeListItem:hover{
  background-color: #ffffff;
  border-color: #02004b;
  color:#02004b;
}
.TwoNoThreeListItem .TwoNoThreeListItem-text1{
  padding-top:2rem;
  padding-left:2rem;
  padding-right:2rem;
  padding-bottom: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
}
.TwoNoThreeListItem .TwoNoThreeListItem-text2{
  padding: 1rem 2rem 1rem 2rem;
  font-size: 1.125rem;
  line-height: 1.875rem;
  text-align: left;
}
</style>
<style>
.proAllnetShow .el-tabs__header{
  height: 4rem;
  width: 100%;
  background-color: #d7d7d7;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.proAllnetShow .el-tabs__nav-wrap{
  height: 4rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: #d7d7d7;
  display: flex;
  justify-content: center;
}
.proAllnetShow .el-tabs--card>.el-tabs__header .el-tabs__item{
  width: 19rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1rem;
  color: #666666;
}
.proAllnetShow .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  color: #02004b;
  background-color: #ffffff;
  opacity: 0.55;
}
</style>
