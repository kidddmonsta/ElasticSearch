const curl = new (require( 'curl-request' ))();

curl.delete('http://localhost:9200/_all');