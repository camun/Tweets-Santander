var config = {};

config.cloudant = {};
config.cloudant.dbname = '';
config.cloudant.account = '';
config.cloudant.password = '';

config.admin_user = 'admin';
config.admin_pass = 'welcome';
config.index_field = 'username';
config.port = process.env.PORT || 3000;

module.exports = config;