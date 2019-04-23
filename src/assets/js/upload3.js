import plupload from 'plupload'
var accessid = ''
var host = ''
var policyBase64 = ''
var signature = ''
var callbackbody = ''
var key = ''
var expire = 0
var g_object_name = ''
// var g_object_name_type = ''
var str = Date.parse(new Date()) / 1000
var timestamp
var now
now = str
timestamp = str
// 获取文件后缀名
function get_suffix(filename) {
  var pos = filename.lastIndexOf('.')
  var suffix = ''
  if (pos != -1) {
    suffix = filename.substring(pos)
  }
  return suffix
}
function random_string(len) {
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  var maxPos = chars.length
  var pwd = ''
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
const up = {
  data() {
    return {
      thisUp: {},
      filename: ''
    }
  },
  methods: {
    set_upload_param(up, filename, ret) {
      this.apiPost('admin/snatch.music/getUploadToken', { suffix: '' }).then(
        res => {
          this.handelResponse(res, data => {
            var obj = data.sign
            host = 'http://ourydc-image.' + obj['host']
            policyBase64 = obj['policy']
            accessid = obj['accessid']
            signature = obj['signature']
            expire = parseInt(obj['expire'])
            callbackbody = obj['callback']
            key = obj['dir']
            g_object_name = key + this.imgObj.url
            console.log(g_object_name)
            var new_multipart_params = {
              key: g_object_name,
              policy: policyBase64,
              OSSAccessKeyId: accessid,
              success_action_status: '200', // 让服务端返回200,不然，默认会返回204
              callback: callbackbody,
              signature: signature
            }
            up.setOption({
              url: host,
              multipart_params: new_multipart_params
            })
            up.start()
          })
        }
      )
    }
  },
  mounted() {
    var $this = this
    this.thisUp = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: 'selectfiles',
      // multi_selection: false,
      container: document.getElementById('container'),
      flash_swf_url: 'Moxie.swf',
      silverlight_xap_url: 'Moxie.xap',
      url: 'http://oss.aliyuncs.com',
      filters: {
        mime_types: [
          // 只允许上传图片和zip,rar文件
          { title: 'Image files', extensions: 'jpg,gif,png,bmp' },
          { title: 'Zip files', extensions: 'zip,rar' },
          { title: 'Audio files', extensions: 'aac' }
        ],
        max_file_size: '10mb', // 最大只能上传10mb的文件
        prevent_duplicates: true // 不允许选取重复文件
      },
      init: {
        PostInit: function() {
          console.log('初始化完成')
          document.getElementById('ossfile').innerHTML = ''
          document.getElementById('postfiles').onclick = function() {
            $this.set_upload_param($this.thisUp, '', false)
            // return false
          }
        },
        FilesAdded: function(up, files) {
          plupload.each(files, function(file) {
            var name = $this.imgObj.uploadUrl + random_string(10) + get_suffix(file.name)
            $this.imgObj.url = name
            document.getElementById('ossfile').innerHTML =
              '<div id="' +
              file.id +
              '">' +
              name +
              ' (' +
              plupload.formatSize(file.size) +
              ')<b></b>' +
              '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div></div>'
          })
        },
        BeforeUpload: function(up, file) {
          $this.set_upload_param(up, file.name, true)
        },
        UploadProgress: function(up, file) {
          var d = document.getElementById(file.id)
          d.getElementsByTagName('b')[0].innerHTML =
            '<span>' + file.percent + '%</span>'
          var prog = d.getElementsByTagName('div')[0]
          var progBar = prog.getElementsByTagName('div')[0]
          progBar.style.width = 2 * file.percent + 'px'
          progBar.setAttribute('aria-valuenow', file.percent)
        },
        FileUploaded: function(up, file, info) {
          if (info.status == 200) {
            $this.thisType[$this.imgObj.attr] = $this.imgObj.url
            document
              .getElementById(file.id)
              .getElementsByTagName('b')[0].innerHTML =
              'upload to oss success, object name:' + file.name
          } else {
            document
              .getElementById(file.id)
              .getElementsByTagName('b')[0].innerHTML = info.response
          }
        },
        Error: function(up, err) {
          if (err.code == -600) {
            document
              .getElementById('console')
              .appendChild(
                document.createTextNode(
                  '\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小'
                )
              )
          } else if (err.code == -601) {
            document
              .getElementById('console')
              .appendChild(
                document.createTextNode(
                  '\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型'
                )
              )
          } else if (err.code == -602) {
            document
              .getElementById('console')
              .appendChild(
                document.createTextNode('\n这个文件已经上传过一遍了')
              )
          } else {
            document
              .getElementById('console')
              .appendChild(
                document.createTextNode('\nError xml:' + err.response)
              )
          }
        }
      }
    })
  }
}
export default up
