#!/bin/bash

# 进入~/download目录中执行

pwd=`pwd`
echo -n "检查nginx版本:"
if [ ! -f /usr/local/nginx/sbin/nginx ]; then
	echo "nginx不存在,开始安装nginx。"
	cd '/home/czm/download'
	wget 'http://labs.frickle.com/files/ngx_cache_purge-2.3.tar.gz'
	wget 'http://www.openssl.org/source/openssl-1.0.2k.tar.gz'
	wget 'http://nginx.org/download/nginx-1.12.1.tar.gz'
	tar -zxf ngx_cache_purge-2.3.tar.gz
	tar -zxf openssl-1.0.2k.tar.gz
	cd openssl-1.0.2k
	./config
	make
	make install
	tar -zxf nginx-1.12.1.tar.gz
	yum -y install pcre-devel openssl-devel
	cd nginx-1.12.1
	./configure --with-pcre-jit --with-http_ssl_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_secure_link_module --with-http_stub_status_module --with-http_gunzip_module --with-http_realip_module --with-ipv6 --with-mail --with-stream --with-mail_ssl_module --with-http_v2_module --with-zlib=${pwd}/zlib-1.2.11 --with-openssl=${pwd}/openssl-1.0.2k --add-module=${pwd}/ngx_cache_purge-2.3
	make -j2
	make install
	cp nginx.service /lib/systemd/system/nginx.service
	systemctl daemon-reload
	systemctl enable nginx.service
	systemctl start nginx.service
fi
version=`/usr/local/nginx/sbin/nginx -V 2>&1 | sed -n "s/^.*nginx\/\([0-9]\+\.[0-9]\+\.[0-9]\+\)/\1/p"`
echo $version
if [[ -z $version ]]; then
	echo "获取版本号错误，忽略nginx检查。"
fi
