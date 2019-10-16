FROM httpd:alpine

RUN echo 'IncludeOptional conf/conf.d/*.conf' >> /usr/local/apache2/conf/httpd.conf
COPY ./config/httpd.conf /usr/local/apache2/conf/conf.d/custom.conf
