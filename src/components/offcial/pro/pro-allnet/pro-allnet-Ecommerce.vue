<template>
  <div class="proAllnetEco">
    <div>
      <div class="banner">
        <p>电商门户</p>
        <p>在商言商，一站式解决电商企业交易与管理难题</p>
      </div>
      <div class="tab">
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" @keydown.native="keyDown($event)" >
            <el-tab-pane label="产品优势" name="first">
              <div class="one clearfix">
                <div class="oneTop clearfix">
                  <div class="oneTopOne">
                    <p class="title">电商门户功能</p>
                    <div class="oneTopOneCont">
                      <el-row type="flex"  justify="center">
                        <el-col :span="5">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">1</div>
                            <div class="oneTopItemText">支持支付宝、微信等多种主流支付方式，配有会员管理系统，内部员工、外部会员权限由你配。</div>
                          </div>
                        </el-col>
                        <el-col :span="5">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">2</div>
                            <div class="oneTopItemText">全新“分销加盟+三级返佣”模式，让您的分销商满天下，销售网络快速扩张。</div>
                          </div>
                        </el-col>
                        <el-col :span="5">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">3</div>
                            <div class="oneTopItemText">产品管理、订单管理、物流配送管理等尽在掌握，让您的产品和服务高效抵达客户。</div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="oneTopTwo">
                    <p class="title">智能电商门户 满足客户需求多样化</p>
                    <div class="oneTopTwoCont">
                      <el-row type="flex"  justify="center">
                        <el-col :span="4">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">智能定价</div>
                            <div class="oneTopItemText">智能识别客户需求，智能定义商品采购数量价格，把握每一个商机。</div>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">灵活折扣设置</div>
                            <div class="oneTopItemText">网点分销，分级管理，不同分销商可设置不同优惠政策。</div>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">多样化返利方式</div>
                            <div class="oneTopItemText">设定返利商品制定返利力度，多样化组合，吸引客户。</div>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">交易支付更敏捷</div>
                            <div class="oneTopItemText">转账付款方式多样化，收支统计更清晰，交易过程更便捷。</div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="oneTopThree">
                    <p class="title">线上、线下无障碍O2O</p>
                    <div class="oneTopThreeCont">
                      <div class="ontTopThreeContItem">
                        <el-row type="flex" justify="center">
                          <el-col :span="6">
                            <div class="item">商城系统促销宣传，用户线下到店购买。</div>
                          </el-col>
                          <el-col :span="6">
                            <div class="item">线下门店缺货，用户线上商城系统下单购买。</div>
                          </el-col>
                          <el-col :span="6">
                            <div class="item">商城系统二维码宣传，用户线下扫二维码购买。</div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="ontTopThreeContItem">
                        <el-row type="flex" justify="center">
                          <el-col :span="6">
                            <div class="item">商城系统发起活动报名，客户线下参与线下活动</div>
                          </el-col>
                          <el-col :span="6">
                            <div class="item">导购通过线上商城系统＋线下渠道发展顾客扩大营销规模。</div>
                          </el-col>
                          <el-col :span="6">
                            <div class="item">商城系统与线下ERP系统对接，实现线上线下业务整合</div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                  <div class="oneTopFour">
                    <p class="title">商城系统后台精细化管理</p>
                    <div class="oneTopTwoCont">
                      <el-row type="flex"  justify="center">
                        <el-col :span="6">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">会员管理</div>
                            <div class="oneTopItemText">线下会员导入线上，统一管理多样的会员政策，提升会员活跃度</div>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">促销政策</div>
                            <div class="oneTopItemText">老会员推荐或邀请新会员注册购买后老会员可以获得推荐返利<br>根据会员访问信息，多维度分析精准营销</div>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="oneTopItem">
                            <div class="ontTopItemNumber">统计分析</div>
                            <div class="oneTopItemText">根据客户来源、访问路径、转化数据以及关键词分析，辅助企业做精准会员营销</div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
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
                    <div class="priceOneLeft"><div class="leftText">简商版</div></div>
                    <div class="priceOneRight">
                      <div class="tableCont">
                        <ul>
                          <li class="table1">PC+移动+Pad</li>
                          <li class="table1">轻松注册/实名认证/登陆简单易用</li>
                          <li class="table1">安全部署+数据更新及维护1年</li>
                        </ul>
                        <ul>
                          <li class="table1">全新商城/更优秀/更强大</li>
                          <li class="table1">便捷支付/财务明细/订单管理</li>
                          <li class="table1"> </li>
                        </ul>
                        <ul>
                          <li class="table1">云服务器50G/共享20M</li>
                          <li class="table1">支持H5支付宝/微信/银联B2B支付</li>
                          <li class="table1"> </li>
                        </ul>
                      </div>
                    </div>
                    <div class="priceOneBtn"><router-link to="/PackageOffer">价格咨询</router-link></div>
                  </div>
                  <div class="priceOne">
                    <div class="priceOneLeft"><div class="leftText">商销版</div></div>
                    <div class="priceOneRight">
                      <div class="tableCont">
                        <ul>
                          <li class="table1">PC+移动+Pad</li>
                          <li class="table1">海报设计/banner图设计20张</li>
                          <li class="table1">安全部署/网站维护/技术支持1年</li>
                        </ul>
                        <ul>
                          <li class="table1">包含简商版套餐所有功能</li>
                          <li class="table1">提供产品图片处理120张</li>
                          <li class="table1"> </li>
                        </ul>
                        <ul>
                          <li class="table1">优惠券/订单提醒/物流查询</li>
                          <li class="table1">支持QQ/微信/微博快捷登陆</li>
                          <li class="table1"> </li>
                        </ul>
                      </div>
                    </div>
                    <div class="priceOneBtn"><router-link to="/PackageOffer">价格咨询</router-link></div>
                  </div>
                  <div class="priceOne">
                    <div class="priceOneLeft"><div class="leftText">营销版</div></div>
                    <div class="priceOneRight">
                      <div class="tableCont">
                        <ul>
                          <li class="table1">PC+移动+Pad</li>
                          <li class="table1">提供产品图片处理280张</li>
                          <li class="table1">数据分析/用户体验改进/反馈收集</li>
                        </ul>
                        <ul>
                          <li class="table1">包含商销版套餐所有功能</li>
                          <li class="table1">在线购买/H5支付/微信公众号支付</li>
                          <li class="table1">享受365安全保障计划</li>
                        </ul>
                        <ul>
                          <li class="table1">海报设计/banner图设计50张</li>
                          <li class="table1">一站式会员数据管理</li>
                          <li class="table1"> </li>
                        </ul>
                      </div>
                    </div>
                    <div class="priceOneBtn"><router-link to="/PackageOffer">价格咨询</router-link></div>
                  </div>
                  <div class="priceOne">
                    <div class="priceOneLeft"><div class="leftText">定制版</div></div>
                    <div class="priceOneRight">
                      <div class="tableCont">
                        <ul>
                          <li class="table1">PC+移动+Pad+小程序</li>
                          <li class="table1">支持营销活动折扣优惠券定制</li>
                          <li class="table1">支持线下团队技术指导工作</li>
                        </ul>
                        <ul>
                          <li class="table1">支持定制化需求设计</li>
                          <li class="table1">支持分销/代理商管理功能定制</li>
                          <li class="table1">支持安全部署/运营/运维解决方案</li>
                        </ul>
                        <ul>
                          <li class="table1">支持特殊功能开发</li>
                          <li class="table1">支持营销工具特殊开发</li>
                          <li class="table1"> </li>
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
                  <p class="title">商城模块 功能全览</p>
                  <div class="threeOneCont clearfix">
                    <div class="threeOneContOne clearfix">
                      <div class="contOneLeft clearfix"><div class="contOneLeftText">后台管理</div></div>
                      <div class="contOneRight clearfix">
                        <ul class="onePurple">
                          <li>商品管理</li>
                          <li>
                            <p>调用Haotui产品模块内容，无需重新添加；</p>
                            <p>支持商品[价格、库存、规格（不同规格不同价格、库存）]设置；</p>
                            <p>同一产品不同规格可以显示不同的对应图片；</p>
                            <p>支持统一运费或指定运费模板设置；</p>
                            <p>支持设定每一个会员的限购数量；</p>
                            <p>支持设定商品可选或必须留言字段。</p>
                          </li>
                        </ul>
                        <ul class="orderCont" style="height: 9.5625rem;">
                          <li>订单管理</li>
                          <li>
                            <p>支持[订单关闭、订单发货、订单完成、订单改价、订单备注]操作；</p>
                            <p>可根据[订单状态]进行筛选管理；</p>
                            <p>可根据时长设置订单状态自动调整[超时未付款自动关闭、发货N天后自动完成、关闭订单后N天后自定删除]；</p>
                            <p>可设置订单以查询物流单号并可到物流单号的进度；</p>
                            <p>可根据订单的编号、会员名、日期、字段、订单状态进行筛选并导出到Excel。</p>
                          </li>
                        </ul>
                        <ul class="logisticsCont" style="height: 6.6875rem;">
                          <li>物流跟踪</li>
                          <li>
                            <p>开启物流跟踪功能，管理员用应用商店余额购买物流接口查询条数；</p>
                            <p>支持[新增、删除、修改]运费模板；</p>
                            <p>可为国内指定设置首件运费以及续建运费（暂不支持全球指定区域）。</p>
                          </li>
                        </ul>
                        <ul class="couponCont" style="height: 4.8125rem;">
                          <li>优惠券</li>
                          <li>
                            <p>管理员在后台可添加优惠券，优惠券可设置开始结束时间、最低使用金额、面值、每人可领张数、发放总量、指定商品可用、使用说明。</p>
                          </li>
                        </ul>
                        <ul class="visiterCont" style="height: 3.6875rem;">
                          <li>访客模式</li>
                          <li>
                            <p>开启游客模式后，用户可以使用游客身份来购买商品，不需要注册账号。</p>
                          </li>
                        </ul>
                        <ul class="couponCont" style="height: 4.8125rem;">
                          <li>支付方式</li>
                          <li>
                            <p>货到付款、支付宝即时到帐、微倍支付、微信扫码支付、中国银联支付、财付通、PayPal、网银在线支付、账户余额支付;需自行申请对应支付平台支付接口（必须正规企业并进行网站备案才能够申请）。</p>
                          </li>
                        </ul>
                        <ul class="visiterCont" style="height: 3.6875rem;">
                          <li>财务发票</li>
                          <li>
                            <p>采用响应式设计，自动适配不同屏幕尺寸，电脑、平板、手机、微信都能够得到一致的购买体验。</p>
                          </li>
                        </ul>
                        <ul class="visiterCont" style="height: 3.6875rem;">
                          <li>优惠券</li>
                          <li>
                            <p>用户个人中心或产品详情页可领取当前可领的优惠券，下订单时选择使用优惠券。</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="threeOneContTwo clearfix">
                      <div class="contTwoleft clearfix">
                        <div class="contTwoLeftText">后台管理</div>
                      </div>
                      <div class="contTwoRight clearfix">
                        <ul class="blue">
                          <li>终端支持</li>
                          <li>采用响应式设计，自动适配不同屏幕尺寸，电脑、平板、手机、微信都能够得到一致的购买体验。</li>
                        </ul>
                        <ul class="buyCarCont" style="height: 4.5625rem;">
                          <li>购物车、收藏夹</li>
                          <li>
                            <p>会员可将商品加入购物车，可以对购物车商品进行增减删除等操作；<br>可看到收藏的商品列表，显示图片，价格，可点击跳转到具体商品详情页，可删除收藏的商品。</p>
                          </li>
                        </ul>
                        <ul class="buyCarCont" style="height: 4.5625rem;">
                          <li>收货物流</li>
                          <li>
                            <p>会员可以新增、删除、修改自己的收货地址；<br>用户在订单详情页面中可查词已发货商品的物流进度。</p>
                          </li>
                        </ul>
                        <ul class="visiterCont" style="height: 3.6875rem;">
                          <li>订单浏览</li>
                          <li>
                            <p>会员可以查看自己提交的订单，支持根据订单编号或商品名称搜索订单，订单界面精美简洁清晰明了。</p>
                          </li>
                        </ul>
                        <ul class="visiterCont" style="height: 3.6875rem;">
                          <li>优惠券</li>
                          <li>
                            <p>用户个人中心或产品详情页可领取当前可领的优惠券，下订单时选择使用优惠券。</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="threeOneContThree clearfix">
                      <div class="contThreeLeft">
                        <div class="contThreeleftText">应用</div>
                      </div>
                      <div class="contThreeRight">
                        <ul>
                          <li>订单提醒</li>
                          <li>支持根据不同订单状态发送短信或邮件提醒，可自定义提醒内容。</li>
                        </ul>
                      </div>
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
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/ecommerce/four-banner-1.png" alt=""></div>
                  <div class="fourOneText">
                    <div><img style="width:13.75rem;  height: 4.25rem;" src="../../../../assets/img/pro-allnet/ecommerce/four-logo-1.png" alt=""></div>
                    <div class="linkA"><a href="http://www.sunuan.cc">http://www.sunuan.cc</a></div>
                    <div class="fourTextCont">佳能公司自1937年创业以来，始终秉承"共生"的企业理念，以创造世界一流产品为奋斗目标，向多元化和全球化发展。目前， 佳能的事业以光学技术为核心，涵盖了影像系统产品、办公产品以及产业设备等广泛领域。位于东京的集团总部与美洲、欧洲、 亚洲和大洋洲的各区域总部紧密联系，构筑了全球化与本土化有机结合的经营体制。</div>
                  </div>
                </div>
                <div class="fourTwo">
                  <div class="fourOneText">
                    <div><img style="width:13rem;height: 6rem;" src="../../../../assets/img/pro-allnet/ecommerce/four-logo-2.png" alt=""></div>
                    <div class="linkA"><a href="http://www.noubel.cn">http://www.noubel.cn</a></div>
                    <div class="fourTextCont">2012年,升华电梯将全新的生产运营中心落户在了江苏徐州。徐州历史上为华夏九州之一，有超过6000年的文明史和2600年的建城史，五省通衢，人口密集，辐射力强，重工业基础扎实，已具有了自主知识产权的核心技术和较高的市场认可度，有千古龙飞地，一代帝王乡的美誉。新建成的徐州生产运营中心投资20亿元、占地500亩，拥有34万平方米电梯行业单体最大的厂房；正委托中国中轻国际工程设计有限公司设计的超300米高的电梯实验塔不仅将成为徐州新的地标性建筑，同时也是世界最高的电梯实验塔；配有超百条中继线的400服务热线及百兆宽带的国内最大电梯呼叫监控云平台已开始试运行；自主研发的以机器人为核心的电梯自动化生产线和机器人工作站也走在世界的前列，徐州生产运营中心完全建成后年产值将突破五万台，为升华电梯的长足发展提供了有力的保障。</div>
                  </div>
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/ecommerce/four-banner-2.png" alt=""></div>
                </div>
                <div class="fourThree">
                  <div style="display:inline-block"><img src="../../../../assets/img/pro-allnet/ecommerce/four-banner-3.png" alt=""></div>
                  <div class="fourOneText">
                    <div><img style="width: 9.1875rem;height: 6.625rem;" src="../../../../assets/img/pro-allnet/ecommerce/four-logo-3.png" alt=""></div>
                    <div class="linkA"><a href="http://www.borcci.com">http://www.borcci.com</a></div>
                    <div class="fourTextCont">有特色的综合购物商城，销售农特产品、工艺品等品牌优质产品，并通过便捷、诚信的服务为您提供愉悦的网上购物体验和优质的线下配送服务。<br>&#12288;&#12288;网站背景：嵩州农商网是嵩县作为国家级电子商务进农村示范点的电商平台。<br>&#12288;&#12288;该网站通过对嵩县的农特产品、文化旅游、工艺品等具有代表性的各类产品进行整合，并分类梳理进行网络展示、销售，建立分销体系，以此打通农特产品供应链，给更多青年创业者提供平台。<br>&#12288;&#12288;未来平台会采用O2O的形式进入洛阳市社区，为洛阳市区的市民提供优质的菜篮子和使命必达的快捷配送服务。</div>
                  </div>
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
    document.onkeypress = function () {
      console.log(window.event.keyCode, 'eee', window.event.returnValue)
      if (window.event.keyCode === 37) {
        window.event.returnValue = false
        console.log(window.event.keyCode, 'aaaaaaaaa', window.event.returnValue)
      } else if (window.event.keyCode === 38) {
        window.event.returnValue = false
        console.log(window.event.keyCode, 'aaaaaaaaa', window.event.returnValue)
      } else if (window.event.keyCode === 39) {
        window.event.returnValue = false
        console.log(window.event.keyCode, 'aaaaaaaaa', window.event.returnValue)
      } else if (window.event.keyCode === 40) {
        window.event.returnValue = false
        console.log(window.event.keyCode, 'aaaaaaaaa', window.event.returnValue)
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(window.event, '<=======aaaaaaaaa')
      if (event.keyCode === 37) {
        window.event.returnValue = false
        console.log(event.keyCode, 'aaaaaaaaa', window.event.returnValue)
      } else if (event.keyCode === 38) {
        window.event.returnValue = false
        console.log(event.keyCode, 'aaaaaaaaa', window.event.returnValue)
      } else if (event.keyCode === 39) {
        window.event.returnValue = false
        console.log(event.keyCode, 'aaaaaaaaa', window.event.returnValue)
      } else if (event.keyCode === 40) {
        window.event.returnValue = false
        console.log(event.keyCode, 'aaaaaaaaa', window.event.returnValue)
      }
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
    },
    // keyupLeft (ev) {
    //   if (ev.keyCode === 37) {
    //     window.event.keyCode = 0
    //     window.event.returnValue = false
    //     // debugger
    //   }
    //   console.log('222222', window.event.keyCode, 'this.activeName', ev.keyCode)
    // },
    keyDown (ev) {
      console.log('event--->', ev)
      var Istrue = true
      if (Istrue) {
        if (ev.keyCode) {
          event.stopPropagation()
          event.preventDefault()
          window.event.returnValue = false
          // debugger
          return false
        }
      }
    }
    // keyPress (ev) {
    //   if (ev.keyCode === 37) {
    //     window.event.keyCode = 0
    //     window.event.returnValue = false
    //     // debugger
    //   }
    //   console.log('111111', window.event.keyCode, 'this.activeName', ev.keyCode)
    // },
    // beforeLeave (activeName, oldActiveName) {
    //   if (activeName === 'fourth') {
    //     if (window.event.keyCode === 37) {
    //       activeName = 'fourth'
    //     }
    //   }
    //   console.log('aaaaa', activeName, oldActiveName)
    // }
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
  clear: both;
}
.proAllnetEco .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url('./../../../../assets/img/pro-allnet/ecommerce/pro-allnet-banner.png');
  background-size: cover;
  text-align: left;
  padding: 9.125rem 0  9.25rem 23rem;
}
.proAllnetEco .banner p:first-child{
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 2rem;
}
.proAllnetEco .banner p:last-child{
  font-size: 1rem;
  color: #ffffff;
}
/* 产品优势  第一部分*/
.title{
  color: #333333;
  font-size: 1.875rem;
}
.oneTop{
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 6.25rem;
}
.oneTopOneCont{
  margin: 0 auto;
  margin-top: 3.6875rem;
  padding-bottom: 4.375rem;
}
.oneTopOneCont .oneTopItem{
  width: 23.75rem;
  height: 9.25rem;
  line-height: 1.8rem;
  background-color: #ffffff;
  border-radius: 1.25rem;
  color: #333;
  font-size: 1.125rem;
  border: solid .0625rem #999;
  position: relative;
}
.oneTopOneCont .oneTopItem:hover{
  border: solid .0625rem #02004b;
  color: #02004b;
}
.oneTopOneCont .oneTopItem:hover .ontTopItemNumber{
  background: #02004b;
}
.oneTopOneCont .oneTopItem .ontTopItemNumber{
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  border-radius: 50%;
  font-size: 2.5rem;
  background: #999;
  color: #fff;
  position: absolute;
  top: -15%;
  left: 45%;
}
.oneTopOneCont .oneTopItem .oneTopItemText{
  width: 17.875rem;
  margin: 0 auto;
  text-align: left;
  text-indent: 2em;
  position: absolute;
  bottom: 8%;
  left: 15%;
}
.oneTopTwo{
  width: 100%;
  margin: 0 auto;
  padding-top: 4.125rem;
  padding-bottom: 4.125rem;
  background-color: #f1f1f1;
}
.oneTopTwo .oneTopTwoCont{
  margin: 0 auto;
  margin-top: 3.6875rem;
}
.oneTopTwo .oneTopTwoCont .oneTopItem{
  height: 11.25rem;
  width: 16.875rem;
  background-color: transparent;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 1.25rem;
  color: #666;
  font-size: 1.125rem;
  border: solid .0625rem #999;
}
.oneTopTwo .oneTopTwoCont .oneTopItem:hover{
  border: solid .0625rem #02004b;
  color: #02004b;
}
.oneTopTwo .oneTopTwoCont .oneTopItem:hover .ontTopItemNumber{
  color: #02004b;
}
.oneTopTwo .oneTopTwoCont .oneTopItem .ontTopItemNumber{
  text-align: center;
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1.0625rem;
}
.oneTopTwo .oneTopTwoCont .oneTopItem .oneTopItemText{
  margin: 0 auto;
  text-align: left;
  text-indent: 2em;
}
.oneTopThree{
  padding:6.1875rem 0 6.1875rem 0;
}
.oneTopThree .oneTopThreeCont{
  margin-top: 3.6875rem;
}
.oneTopThree .oneTopThreeCont .ontTopThreeContItem:last-child{
  margin-top: 3.75rem;
}
.oneTopThree .oneTopThreeCont .ontTopThreeContItem .item{
  width: 21.875rem;
  height: 5.875rem;
  background-color: transparent;
  border-radius: 1.25rem;
  border: solid .0625rem #999999;
  color: #666;
  box-sizing: border-box;
  text-align: left;
  padding:1.3125rem 3.125rem 1.4375rem 3.125rem;
}
.oneTopThree .oneTopThreeCont .ontTopThreeContItem .item:hover{
  border: solid .0625rem #02004b;
  color: #02004b;
}
.oneTopFour{
  width: 100%;
  margin: 0 auto;
  padding-top: 4.125rem;
  padding-bottom: 4.125rem;
  background-color: #f1f1f1;
}
.oneTopFour .oneTopTwoCont{
  margin: 0 auto;
  margin-top: 3.6875rem;
}
.oneTopFour .oneTopTwoCont .oneTopItem{
  height: 13.125rem;
  width: 21.875rem;
  line-height: 1.6875rem;
  background-color: transparent;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 1.25rem;
  color: #666;
  font-size: 1.125rem;
  border: solid .0625rem #999;
}
.oneTopFour .oneTopTwoCont .oneTopItem:hover{
  border: solid .0625rem #02004b;
  color: #02004b;
}
.oneTopFour .oneTopTwoCont .oneTopItem:hover .ontTopItemNumber{
  color: #02004b;
}
.oneTopFour .oneTopTwoCont .oneTopItem .ontTopItemNumber{
  text-align: center;
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1.0625rem;
}
.oneTopFour .oneTopTwoCont .oneTopItem .oneTopItemText{
  margin: 0 auto;
  text-align: left;
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
  /* line-height: 2.125rem; */
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
  margin-top: 1.5rem;
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
  vertical-align: middle;
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
.three .threeOne .threeOneCont{
  margin: 0 auto;
  margin-top: 3.75rem;
}
.threeOneCont .threeOneContOne {
  display: flex;
  justify-content:center;
}
.threeOneCont .threeOneContOne .contOneLeft{
  width: 4.125rem;
  height: 48.2rem;
  box-sizing: border-box;
  color: #fff;
  background-color: #02004b;
  padding: 21rem 1.25rem 26.25rem 1%;
  display: inline-block;
  vertical-align: baseline;
}
.threeOneCont .threeOneContOne .contOneLeft.contOneLeftText{
  width: 0.85rem;
  margin: 0 auto;
  font-size: 1.25rem;
  line-height: 1.7rem;
}
.threeOneCont .threeOneContOne .contOneRight{
  display: inline-block;
  vertical-align: top;
  width: 70.8125rem;
}
.threeOneCont .threeOneContOne .contOneRight ul{
  background: #f1f1f1;
}
.threeOneCont .threeOneContOne .contOneRight ul li{
  display: inline-block;
  float: left;
  box-sizing: border-box;
  font-size: 1rem;
  color: #666;
}
.threeOneCont .threeOneContOne .contOneRight ul li:first-child{
  width: 10.9375rem;
  height: 100%;
  /* line-height: 200%; */
  border-right: #f1f1f1 .0625rem solid;
}
.threeOneCont .threeOneContOne .contOneRight ul li:last-child{
  height: 100%;
  padding-left: 3.0625rem;
  padding-right: 1.25rem;
  text-align: left;
}
.threeOneCont .threeOneContOne .contOneRight .onePurple{
  height: 11.25rem;
  background: #8e8bff;
}
.threeOneCont .threeOneContOne .contOneRight .onePurple li{
  background: transparent;
  color:#fff;
}
.threeOneCont .threeOneContOne .contOneRight .onePurple li:first-child{
  padding-top: 5.75rem;
}
.threeOneCont .threeOneContOne .contOneRight .onePurple li:last-child{
  line-height: 1.6rem;
  padding-top: 1.1875rem;
}
.threeOneCont .threeOneContOne .contOneRight .orderCont li:first-child{
  padding-top: 4rem;
}
.threeOneCont .threeOneContOne .contOneRight .orderCont li:last-child{
  line-height: 1.6rem;
  padding-top: 0.8rem;
}
.threeOneCont .threeOneContOne .contOneRight .logisticsCont li:first-child{
  padding-top: 2rem;
}
.threeOneCont .threeOneContOne .contOneRight .logisticsCont li:last-child{
  line-height: 1.6rem;
  padding-top: 0.4rem;
}
.threeOneCont .threeOneContOne .contOneRight .couponCont li:first-child{
  padding-top: 1rem;
}
.threeOneCont .threeOneContOne .contOneRight .couponCont li:last-child{
  line-height: 1.6rem;
  padding-top: 0.4rem;
  width: 55.5625rem;
  word-wrap:break-word
}
.threeOneCont .threeOneContOne .contOneRight .visiterCont li:first-child{
  padding-top: 0.4rem;
}
.threeOneCont .threeOneContOne .contOneRight .visiterCont li:last-child{
  padding-top: 0.4rem;
}
.threeOneCont .threeOneContTwo{
  display: flex;
  justify-content: center;
}
.threeOneCont .threeOneContTwo .contTwoleft{
  width: 4.125rem;
  height: 20.05rem;
  display: inline-block;
  box-sizing: border-box;
  color: #fff;
  background-color: #03006b;
  padding:6rem 1.25rem 6.25rem 1%;
  vertical-align: baseline;
}
.threeOneCont .threeOneContTwo .contTwoleft .contTwoLeftText{
  width: 0.75rem;
  margin: 0 auto;
  font-size: 1.0rem;
  line-height: 1.4rem;
}
.threeOneCont .threeOneContTwo .contTwoRight{
  display: inline-block;
  margin:0;
  padding:0;
  vertical-align: top;
  width: 70.8125rem;
}
.threeOneCont .threeOneContTwo .contTwoRight ul{
  background: #f1f1f1;
}
.threeOneCont .threeOneContTwo .contTwoRight ul li{
  display: inline-block;
  float: left;
  box-sizing: border-box;
  font-size: 1rem;
  color: #666;
}
.threeOneCont .threeOneContTwo .contTwoRight ul li:first-child{
  width: 10.9375rem;
  height: 100%;
  /* line-height: 200%; */
  border-right: #f1f1f1 .0625rem solid;
}
.threeOneCont .threeOneContTwo .contTwoRight ul li:last-child{
  height: 100%;
  padding-left: 3.0625rem;
  padding-right: 1.25rem;
  text-align: left;
}
.threeOneCont .threeOneContTwo .contTwoRight .blue{
  height: 3.5625rem;
  background: #8e8bff;
}
.threeOneCont .threeOneContTwo .contTwoRight .blue li{
  background: transparent;
  color:#fff;
}
.threeOneCont .threeOneContTwo .contTwoRight .blue li:first-child{
  padding-top: 1.25rem;
}
.threeOneCont .threeOneContTwo .contTwoRight .blue li:last-child{
  line-height: 1.6rem;
  padding-top: 1.25rem;
}
.threeOneCont .threeOneContTwo .contTwoRight .buyCarCont li:first-child{
  padding-top: 2rem;
}
.threeOneCont .threeOneContTwo .contTwoRight .buyCarCont li:last-child{
  line-height: 1.6rem;
  padding-top: 0.8rem;
}
.threeOneCont .threeOneContTwo .contTwoRight .visiterCont li:first-child{
  padding-top: 0.4rem;
}
.threeOneCont .threeOneContTwo .contTwoRight .visiterCont li:last-child{
  padding-top: 0.4rem;
}
.threeOneCont .threeOneContThree{
  display: flex;
  justify-content: center;
}
.threeOneCont .threeOneContThree .contThreeLeft{
  width: 4.125rem;
  height: 3.5625rem;
  margin:0;
  padding:0;
  box-sizing: border-box;
  color: #fff;
  background-color: #02004b;
  padding: 0.3rem 1.25rem 0.25rem 1%;
  display: inline-block;
  vertical-align: baseline;
}
.threeOneCont .threeOneContThree .contThreeLeft .contThreeLeftText{
  width: 0.85rem;
  margin: 0 auto;
  font-size: 1.25rem;
  line-height: 1.7rem;
}
.threeOneCont .threeOneContThree .contThreeRight{
  display: inline-block;
  margin:0;
  padding:0;
  vertical-align: top;
  width: 70.8125rem;
}
.threeOneCont .threeOneContThree .contThreeRight ul{
  height: 3.5625rem;
  background:#5bb8ff;
}
.threeOneCont .threeOneContThree .contThreeRight ul li{
  display: inline-block;
  float: left;
  box-sizing: border-box;
  font-size: 1rem;
  color: #fff;
}
.threeOneCont .threeOneContThree .contThreeRight ul li:first-child{
  padding-top: 1.25rem;
  width: 10.9375rem;
  height: 100%;
  border-right: #f1f1f1 .0625rem solid;
}
.threeOneCont .threeOneContThree .contThreeRight ul li:last-child{
  height: 100%;
  padding-left: 3.0625rem;
  text-align: left;
  padding-top: 1.2rem;
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
.proAllnetEco .el-tabs__header{
  height: 4rem;
  width: 100%;
  background-color: #d7d7d7;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.proAllnetEco .el-tabs__nav-wrap{
  height: 4rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: #d7d7d7;
  display: flex;
  justify-content: center;
}
.proAllnetEco .el-tabs--card>.el-tabs__header .el-tabs__item{
  width: 19rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1rem;
  color: #666666;
}
.proAllnetEco .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
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
