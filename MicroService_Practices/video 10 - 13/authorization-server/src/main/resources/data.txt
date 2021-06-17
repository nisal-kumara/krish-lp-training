INSERT INTO oauth_client_details (client_id, client_secret, web_server_redirect_uri, scope, access_token_validity, refresh_token_validity, resource_ids, authorized_grant_types, additional_information) VALUES ('mobile', '{bcrypt}$2a$10$gPhlXZfms0EpNHX0.HHptOhoFD1AoxSr/yUIdTqA8vtjeP4zi0DDu', 'http://localhost:8080/login', 'READ,WRITE', '3600', '10000', 'inventory,payment', 'authorization_code,password,refresh_token,implicit', '{}');
--use this site to bcrypt -> https://www.browserling.com/tools/bcrypt
 INSERT INTO PERMISSION (NAME) VALUES
 ('create_profile'),
 ('read_profile'),
 ('update_profile'),
 ('delete_profile');

 INSERT INTO role (NAME) VALUES
		('ROLE_admin'),('ROLE_editor'),('ROLE_operator');

/* Watch from here to understand this -> video 11 -> 11:14 */
 INSERT INTO PERMISSION_ROLE (PERMISSION_ID, ROLE_ID) VALUES
     (1,1), /*create-> admin */
     (2,1), /* read admin */
     (3,1), /* update admin */
     (4,1), /* delete admin */
     (2,2),  /* read Editor */
     (3,2),  /* update Editor */
     (2,3);  /* read operator */

insert into user (id, username,password, email, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked) VALUES ('1', 'nisal','{bcrypt}$2a$10$E59AracBNOrxY.IJHWzng.dRK9nWlgDHt1nwFEH8m2wUMagmWgKN.', 'nisal@gmail.com', '1', '1', '1', '1');
 insert into  user (id, username,password, email, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked) VALUES ('2', 'kumara', '{bcrypt}$2a$10$qUKs7LsEKwVpuPXcIAgN7OviEViPSqPKBfZOd95pgaEIntJ6tHxYe','kumara@gmail.com', '1', '1', '1', '1');
 insert into  user (id, username,password, email, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked) VALUES ('3', 'pubudu', '{bcrypt}$2a$10$4RRX.dZF1PKNL8ZEEqtLQeKl.UAQ5jlhHI1NXfjGzJXw5d3juPLcq', 'pubudu@gmail.com', '1', '1', '1', '1');

/*
passwords:
nisal - nisal123
kumara - kumara123
pubudu - pubudu123
*/
INSERT INTO ROLE_USER (ROLE_ID, USER_ID)
    VALUES
    (1, 1) /* nisal-admin */,
    (2, 2) /* kumara-operator */,
    (3, 3) /* pubudu-operator */ ;