<template>
  <div class="proAllnetRes">
    <div>
      <div class="banner">
        <p>响应式展示门户</p>
        <p>一站式全网选择，就选九江东注，带给您不一样的体验</p>
      </div>
      <div class="tab">
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="产品优势" name="first">
              <div class="one clearfix">
                <div class="oneTop clearfix">
                  <div class="banner1left"><img src="../../../../assets/img/pro-allnet/response/detail-banner1-left.png" alt=""></div>
                  <div class="banner1right"><img src="../../../../assets/img/pro-allnet/response/detail-banner1-right.png" alt=""></div>
                  <div class="banner1Text">
                    <p>一站式网站设计，多端展现</p>
                    <p>PC端网站+移动端+Pad+TV+APP+微信+小程序</p>
                  </div>
                </div>
                <div class="oneTwo clearfix">
                  <p>丰富多彩的呈现样式，精彩炫酷的视觉体验</p>
                  <div class="oneTwoCard">
                    <el-row :gutter="240">
                      <el-col :span="8">
                        <div class="twoCardLi">
                          <img src="../../../../assets/img/pro-allnet/oneTwo1.png" alt="">
                          <div class="twoCardLiText">
                            <p>一对一专属方案</p>
                            <p>针对性解决方案</p>
                            <p>提升品牌形象</p>
                          </div>
                        </div>
                        =</el-col>
                      <el-col :span="8">
                        <div class="twoCardLi">
                          <img src="../../../../assets/img/pro-allnet/oneTwo2.png" alt="">
                          <div class="twoCardLiText">
                            <p>一对一定制化设计</p>
                            <p>一对一定制化设计</p>
                            <p>精美炫酷</p>
                            <p>无限可能</p>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="twoCardLi">
                          <img src="../../../../assets/img/pro-allnet/oneTwo3.png" alt="">
                          <div class="twoCardLiText">
                            <p>一对一服务</p>
                            <p>一对一专属客服</p>
                            <p>一对一专属设计师</p>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <div class="oneTab clearfix">
                  <p class="title">多场景应用</p>
                  <div class="oneTabCont">
                    <el-tabs :tab-position='tabPosition' style="display: flex;justify-content: center;">
                      <el-tab-pane label="订单服务">
                          <el-row type="flex" justify="start">
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/one2-1.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>在线预定</p>
                                  <div>帮助企业提高订货、物流业务工作效率，优化订货管理流程，节约订货，物流、对账等环节的通讯成本。</div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/one1-2.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>在线询价</p>
                                  <div>汇集用户需求，锁定购买意向 </div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row type="flex" justify="start" style="margin-top:1rem">
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/one2-1.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>在线下单</p>
                                  <div>增加客户、提升销量，降低成本、加速资金流转</div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/one2-2.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>在线客服</p>
                                  <div>能随时与客户在线交流，对订货、发货、收付款中疑问及时反馈、短信互动以及系统公告发布。 </div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                      </el-tab-pane>
                      <el-tab-pane label="网络营销推广">
                          <el-row type="flex" justify="start">
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/two1-1.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>关键词优化设置</p>
                                  <div>可帮助搜索引擎更好的理解您的网站，提高索引内容的效率和准确度。</div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/two1-2.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>自动提交搜索引擎收录</p>
                                  <div>自助将网址提交到搜索引擎，主动报到，方便搜索引擎收录。 </div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                      </el-tab-pane>
                      <el-tab-pane label="客户管理">
                        <el-row type="flex" justify="start">
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/three1-1.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>商机管理</p>
                                  <div>可以实现多种信息收集诉求（如预约、预订、申请、报名等），根据客户业务需求，自定义设置。</div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/three1-2.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>会员管理</p>
                                  <div>让访客能与企业产生联系，形成一往一来的沟通闭环，让传播更有效。 </div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                      </el-tab-pane>
                      <el-tab-pane label="网络营销分析系统">
                        <el-row type="flex" justify="start">
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/four1-1.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>网站流量</p>
                                  <div>实时监控网站流量，对运营效果一目了然</div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/four1-2.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>网站用户行为数据</p>
                                  <div>精细化运营，用数据驱动企业增长 </div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row type="flex" justify="start" style="margin-top:1rem">
                            <el-col :span="12">
                              <div class="tabBox">
                                <img src="../../../../assets/img/pro-allnet/response/four2-1.png" alt="" style="display:inline-block">
                                <div class="tabBoxRight">
                                  <p>渠道流量</p>
                                  <div>分析受访群众流量，提升营销效果</div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                      </el-tab-pane>
                    </el-tabs>
                  </div>
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
                  <div class="fiveCont">九江东注为您提供一站式建站服务</div>
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
                    <div class="priceOneBtn"><router-link to="/PackageOffer">价格咨询</router-link></div>
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
                    <div class="priceOneBtn"><router-link to="/PackageOffer">价格咨询</router-link></div>
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
                    <div class="priceOneBtn"><router-link to="/PackageOffer">价格咨询</router-link></div>
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
                    <div class="priceOneBtn"><router-link to="/PackageOffer">价格咨询</router-link></div>
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
                  <div class="fiveCont">九江东注为您提供一站式建站服务</div>
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
                  <p class="title">功能模块</p>
                  <div class="threeThrdeeList">
                    <div>
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="threeListItem1-1 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>产品管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem1-2 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>商机线索管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem1-3 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>文件下载</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div style="margin-top:2.5rem;">
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="threeListItem2-1 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>新闻咨询管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem2-2 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>产品内容管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem2-3 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>导航管理</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div style="margin-top:2.5rem;">
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="threeListItem3-1 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>留言管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem3-2 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>整站检索管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem3-3 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>图片管理</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div style="margin-top:2.5rem;">
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="threeListItem4-1 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>友情链接管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem4-2 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>企业视频管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem4-3 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>订购支付</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div style="margin-top:2.5rem;">
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="threeListItem5-1 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>短信营销</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem5-2 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>服务网点管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem5-3 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>订单服务</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div style="margin-top:2.5rem;">
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="threeListItem6-1 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>物流服务</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem6-2 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>在线招聘</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem6-3 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>API接口开放</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div style="margin-top:2.5rem;">
                      <el-row type="flex" justify="center">
                        <el-col :span="4">
                          <div class="threeListItem7-1 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>微信管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem7-2 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>APP管理</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="threeListItem7-3 threeOneListItem">
                            <div class="listItemImg"></div>
                            <span>小程序管理</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <!-- <el-button type="primary" class="showMore">查看更多</el-button> -->
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
                  <div class="fiveCont">九江东注为您提供一站式建站服务</div>
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
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/response/four-banner-1.png" alt=""></div>
                  <div class="fourOneText">
                    <div><img style="width: 10.75rem;height: 2.875rem;" src="../../../../assets/img/pro-allnet/response/four-logo-1.png" alt=""></div>
                    <div class="linkA"><a href="http://www.sunuan.cc">http://www.sunuan.cc</a></div>
                    <div class="fourTextCont">2013年  苏暖前公司汇科成立，销售额158万  服务52位客户<br>&#12288;&#12288;
                                              2014年  与世界500强HITACHI合作，在南通成立直营店，专注于家用中央空调市场，销售额858万，服务262位客户<br>&#12288;&#12288;
                                              2015年  成立第一家苏暖舒适家体验馆，融合冷暖、空气、水、智能，致力于为客户打造舒适家，销售额1587万，服务486位客户<br>&#12288;&#12288;
                                              2016年  3.0施工类精工技术研发成功，400独立售后团队成立，全年客户满意度98.3%，投诉率为零，客户推荐并成功占全年总客户数量的46.3%。销售额3286万，单年服务客户超过1000位。成功注册苏暖商标品牌。<br>&#12288;&#12288;
                                              2017年  苏暖海安分公司成立，4.0施工技术研发成功，售后准点率100%，全年客户满意度99.4%，投诉率为零，客户推荐并成功占全年总客户数量的62.5%，销售额7220万，服务总客户累计超过4000户，南通地区每三套新房有一套使用苏暖服务。<br>&#12288;&#12288;
                                              2018年  我们用心前行，致力于舒适家行业，打造高品质的舒适家居生活。</div>
                  </div>
                </div>
                <div class="fourTwo">
                  <div class="fourOneText">
                    <div><img style="width: 9.125rem;height: 3.5rem;" src="../../../../assets/img/pro-allnet/response/four-logo-2.png" alt=""></div>
                    <div class="linkA"><a href="http://www.noubel.cn">http://www.noubel.cn</a></div>
                    <div class="fourTextCont">诺贝家居创立于1978年，专业致力于为客户创造有艺术气质的家，从事中高端整体家居的研发、生产和销售。<br>&#12288;&#12288;
                                              诺贝家居以“成为受人尊重的百年企业”为愿景，在践行“创造价值、厚德感恩、互信共赢”核心价值观的过程中，由中国迅速扩张至全球，旗舰店遍布北京、上海、广州、深圳等国内一二三线城市，以及加拿大、澳大利亚、俄罗斯、迪拜、阿联酋、沙特等国家和地区。<br>&#12288;&#12288;
                                              作为当代美学家居运营商，诺贝有着精耕中高端家居市场的品牌战略规划，旗下拥有“宫廷壹号”、“镁作”、“M&E”等多个品牌，构成覆盖家居品类全风格的品牌矩阵。<br>&#12288;&#12288;
                                              诺贝家居自成立四十年来忠于初心，始终专注于中高端家居的研发与制造，致力于为追求高品质生活的人们提供优质的产品与服务，打造健康环保，富有艺术气质的生活方式，让全球更多的家庭享受有爱、有品质的生活。</div>
                  </div>
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/response/four-banner-2.png" alt=""></div>
                </div>
                <div class="fourThree">
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/response/four-banner-3.png" alt=""></div>
                  <div class="fourOneText">
                    <div><img style="width: 13.375rem;height: 1.4375rem;" src="../../../../assets/img/pro-allnet/response/four-logo-3.png" alt=""></div>
                    <div class="linkA"><a href="http://www.borcci.com">http://www.borcci.com</a></div>
                    <div class="fourTextCont">BORCCI 柏厨，专门从事集成厨房产品的研究、设计、生产与销售。 2000 年， 方太董事长兼总裁茅忠群提出“集成厨房”全新概念，推动中国厨房行业实现了“厨柜-整体厨房-集成厨房”的产业升级。经过近20年的品牌积累，业务已遍布全国大中型城市。 柏厨不断致力于为追求高品质生活的人们提供无与伦比的产品和服务。</div>
                  </div>
                </div>
                <div class="fourFour">
                  <div class="fourOneText">
                    <div><img style="width:10.1875rem;height: 7.25rem;" src="../../../../assets/img/pro-allnet/response/four-logo-4.png" alt=""></div>
                    <div class="linkA"><a href="http://www.sshlx.cn">http://www.sshlx.cn</a></div>
                    <div class="fourTextCont">公司成立于2015年12月，拥有员工数45人，是一个专业制作小龙虾的餐饮公司，从小龙虾养殖、配送、清洗加工及菜品制作拥有一套成熟的系统。</div>
                  </div>
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/response/four-banner-4.png" alt=""></div>
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
        } else if (value.lenght > 13) {
          callback(new Error('请输入正确手机号'))
        } else {
          callback()
        }
      }, 500)
    }
    return {
      activeName: 'first',
      tabPosition: 'left',
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
    informaLeftBtn () {
      console.log(this.form, '99999')
      let mobile = this.form.mobile
      let text = this.form.text
      let company = this.form.company
      if (mobile === '' || text === '' || company === '') {
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
    informaRightBtn () {
      console.log('联系我们')
      // this.$http.jsonp('https://wpa.qq.com/msgrd?v=3&uin=1043814457&site=qq&menu=yes', {}, {
      //   headers: {
      //     referer: 'https://wpa.qq.com',
      //     host: 'wpa.qq.com'
      //   },
      //   emulateJSON: true
      // }).then((response) => {
      //   this.movie = response.data
      //   console.log(this.movie)
      // }).catch(
      //   console.log('9999')
      // )
      // this.$http.jsonp('http://wpa.qq.com/msgrd?v=3&uin=1043814457&site=qq&menu=yes').then(function (res) {
      //   console.log('res', res)
      // })
      // let that = this
      // that.$axios.post('http://wpa.qq.com/msgrd?v=3&uin=1043814457&site=qq&menu=yes').then(function (res) {
      //   console.log('qqq', res)
      // })
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
.proAllnetRes .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url('./../../../../assets/img/pro-allnet/response/pro-allnet-banner.png');
  background-size: cover;
  text-align: left;
  padding: 9.125rem 0  9.25rem 23rem;
}
.proAllnetRes .banner p:first-child{
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 2rem;
}
.proAllnetRes .banner p:last-child{
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
  line-height: 29rem;
  padding: 7rem 0rem 9rem 0rem;
  display: flex;
  justify-content: center;
  justify-items: center;
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
/*产品优势  多场景应用部分 */
.oneTab{
  margin:0 auto;
  margin-top: 6.25rem;
}
.oneTab .oneTabCont{
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: flex-start;
}
.oneTab .oneTabCont .tabBox{
  width: 28.1875rem;
  height: 8.8125rem;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
  padding:1.1875rem .9375rem 1.0625rem .9375rem;
  color: #02004b;
  border-radius: .625rem;
  border: solid .0625rem #02004b;
}
.oneTab .oneTabCont .tabBox:first-child{
  margin-right: 1.625rem;
}
.oneTab .oneTabCont .tabBoxRight{
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}
.oneTab .oneTabCont .tabBox img{
  display: inline-block;
  vertical-align: middle;
}
.oneTab .oneTabCont .tabBox .tabBoxRight p{
  margin-bottom: 1.3125rem;
  font-size: 1.25rem;
}
.oneTab .oneTabCont .tabBox .tabBoxRight div{
  width: 22.75rem;
  display: inline-block;
  font-size: 1rem;
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
  text-align: center
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
  /* line-height: 3.125rem; */
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
.two .priceOneRight:hover ul .table1{
  border: .0625rem solid #02004b;
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
.priceOneBtn a{
  color: #ff0000;
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
.three .threeListItem5-1{
  background-image: url(../../../../assets/img/pro-allnet/threeTop5-1.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem5-1:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop5-1-blue.png);
}
.three .threeListItem5-2{
  background-image: url(../../../../assets/img/pro-allnet/threeTop5-2.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem5-2:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop5-2-blue.png);
}
.three .threeListItem5-3{
  background-image: url(../../../../assets/img/pro-allnet/threeTop5-3.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem5-3:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop5-3-blue.png);
}
.three .threeListItem6-1{
  background-image: url(../../../../assets/img/pro-allnet/threeTop6-1.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem6-1:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop6-1-blue.png);
}
.three .threeListItem6-2{
  background-image: url(../../../../assets/img/pro-allnet/threeTop6-2.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem6-2:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop6-2-blue.png);
}
.three .threeListItem6-3{
  background-image: url(../../../../assets/img/pro-allnet/threeTop6-3.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem6-3:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop6-3-blue.png);
}
.three .threeListItem7-1{
  background-image: url(../../../../assets/img/pro-allnet/threeTop7-1.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem7-1:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop7-1-blue.png);
}
.three .threeListItem7-2{
  background-image: url(../../../../assets/img/pro-allnet/threeTop7-2.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem7-2:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop7-2-blue.png);
}
.three .threeListItem7-3{
  background-image: url(../../../../assets/img/pro-allnet/threeTop7-3.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
.three .threeListItem7-3:hover{
  background-image: url(../../../../assets/img/pro-allnet/threeTop7-3-blue.png);
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
  vertical-align: baseline;
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
  margin-top: 1.875rem;
}
.four .fourTwo{
  margin-top: 5.5rem;
}
.four .fourTwo .fourOneText{
  display: inline-block;
  margin-right:3.75rem;
  vertical-align: baseline;
  padding-top: 1.875rem;
}
.four .fourThree{
  margin-top: 5.5rem;
}
.four .fourFour{
  margin-top: 5.5rem;
}
.four .fourFour .fourOneText{
  display: inline-block;
  margin-right:3.75rem;
  vertical-align: baseline;
  padding-top: 1.875rem;
}
</style>
<style>
.proAllnetRes .el-tabs__header{
  height: 4rem;
  width: 100%;
  background-color: #d7d7d7;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.proAllnetRes .el-tabs__nav-wrap{
  height: 4rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: #d7d7d7;
  display: flex;
  justify-content: center;
}
.proAllnetRes .el-tabs--card>.el-tabs__header .el-tabs__item{
  width: 19rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1rem;
  color: #666666;
}
.proAllnetRes .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  color: #02004b;
  background-color: #ffffff;
  opacity: 0.55;
}
.oneTab .oneTabCont .el-tabs--left .el-tabs__header.is-left{
  float: left;
  background-color: transparent;
  border: none;
}
.oneTab .oneTabCont  .el-tabs__header{
    width: 14.375rem;
    background-color: #d7d7d7;
    text-align: center;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.oneTab .oneTabCont .el-tabs__content{
  width:80%;
  margin: 0;
  box-sizing: border-box;
  display: inline-block;
  margin-left: 3.05rem;
  /* padding-right: 10rem; */
}
.oneTab .oneTabCont .el-tabs__nav-wrap{
  background-color: transparent;
  border: none;
  width: 14rem;
  height: 100%;
  margin: 0;
}
.oneTab .oneTabCont .el-tabs--left .el-tabs__item.is-left{
  width: 14rem;
  height: 3.3125rem;
  line-height: 3.3125rem;
  box-sizing: border-box;
  text-align: center;
  background-color: transparent;
  border-radius: .625rem;
  border: solid .0625rem #999999;
  margin-bottom: 1.8125rem;
}
.oneTab .oneTabCont .el-tabs--left .el-tabs__item.is-left:last-child{
  margin: 0;
}
.oneTab .oneTabCont .el-tabs--left .el-tabs__nav-wrap.is-left::after, .el-tabs--left .el-tabs__nav-wrap.is-right::after, .el-tabs--right .el-tabs__nav-wrap.is-left::after, .el-tabs--right .el-tabs__nav-wrap.is-right::after{
    height: 0;
    width: 0px;
    bottom: auto;
    top: 0;
}
.oneTab .oneTabCont.el-tabs--left{
  margin: 0 auto;
}
.oneTab .oneTabCont .el-tabs__active-bar{
  background-color:transparent;
  height: 0;
  width: 0;
}
.oneTab .oneTabCont .el-tabs__item{
  color: #999;
}
.oneTab .oneTabCont .el-tabs__item:hover{
  color:#02004b;
}
.oneTab .oneTabCont .el-tabs__item.is-active{
  color:#02004b;
}
</style>
