/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 80031 (8.0.31)
 Source Host           : localhost:3306
 Source Schema         : my_sql

 Target Server Type    : MySQL
 Target Server Version : 80031 (8.0.31)
 File Encoding         : 65001

 Date: 22/11/2023 17:25:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods_details
-- ----------------------------
DROP TABLE IF EXISTS `goods_details`;
CREATE TABLE `goods_details`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品描述',
  `more` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '小标题',
  `price` bigint NOT NULL COMMENT '价格',
  `jdPrice` bigint NOT NULL COMMENT '京东价格',
  `tbPrice` bigint NOT NULL COMMENT '淘宝价格',
  `pddPrice` bigint NOT NULL COMMENT '拼多多价格',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_details
-- ----------------------------
INSERT INTO `goods_details` VALUES (1, '小米13 徕卡光学镜头 第二代骁龙8处理器 超窄边屏幕 120 Hz高刷 67W快充 12+256GB 黑色 5G手机', '徕卡光学镜头 · 徕卡原生双画质 · 第二代骁龙8', 4299, 4299, 4499, 4399);
INSERT INTO `goods_details` VALUES (2, '小米13Ultra 徕卡光学全焦段四摄 第二代骁龙8处理器 2K超色准屏 IP68防水 12+256GB 黑色 小米手机 5G手机', '徕卡全焦段四摄 · 2K超色准屏 · IP68防水', 6399, 6499, 6599, 6399);
INSERT INTO `goods_details` VALUES (3, 'Redmi Note 12 Turbo 5G 第二代骁龙7+ 超细四窄边OLED直屏 6400万像素 12GB+256GB 碳纤黑 智能手机 小米红米', '第二代骁龙7+ · 超细四窄边直屏 · 6400万像素', 2099, 2199, 2199, 2099);
INSERT INTO `goods_details` VALUES (4, 'Redmi K60 骁龙8+处理器 2K高光屏 6400万超清相机 5500mAh长续航 12GB+256GB 墨羽 小米红米5G', '骁龙8+处理器 · 2K高光屏', 2199, 2299, 2199, 2199);

-- ----------------------------
-- Table structure for goods_image_connection
-- ----------------------------
DROP TABLE IF EXISTS `goods_image_connection`;
CREATE TABLE `goods_image_connection`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `goods_id` bigint NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_image_connection
-- ----------------------------
INSERT INTO `goods_image_connection` VALUES (1, 1, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670745532.86084186.png');
INSERT INTO `goods_image_connection` VALUES (2, 1, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670745532.85539028.png');
INSERT INTO `goods_image_connection` VALUES (3, 1, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670745532.89043079.png');
INSERT INTO `goods_image_connection` VALUES (4, 1, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670745532.90321703.png');
INSERT INTO `goods_image_connection` VALUES (5, 2, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681726094.73687921.png');
INSERT INTO `goods_image_connection` VALUES (6, 2, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681805069.68642151.png');
INSERT INTO `goods_image_connection` VALUES (7, 2, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681805071.89555963.png');
INSERT INTO `goods_image_connection` VALUES (8, 2, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681805074.57094989.png');
INSERT INTO `goods_image_connection` VALUES (9, 3, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.12241762.png');
INSERT INTO `goods_image_connection` VALUES (10, 3, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.14646441.png');
INSERT INTO `goods_image_connection` VALUES (11, 3, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.1181124.png');
INSERT INTO `goods_image_connection` VALUES (12, 3, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.11927388.png');
INSERT INTO `goods_image_connection` VALUES (13, 4, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1672220438.99443170.png');
INSERT INTO `goods_image_connection` VALUES (14, 4, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1672220444.39858323.png');
INSERT INTO `goods_image_connection` VALUES (15, 4, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1672037270.59315167.png');
INSERT INTO `goods_image_connection` VALUES (16, 4, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1672037270.61465433.png');

-- ----------------------------
-- Table structure for goods_table
-- ----------------------------
DROP TABLE IF EXISTS `goods_table`;
CREATE TABLE `goods_table`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '商品名',
  `price` bigint NOT NULL COMMENT '价格',
  `sale` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '销量',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '图片url',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_table
-- ----------------------------
INSERT INTO `goods_table` VALUES (1, '小米13', 4299, '11w', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670745532.90321703.png');
INSERT INTO `goods_table` VALUES (2, '小米13Ultra', 6499, '10w', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681805071.89555963.png');
INSERT INTO `goods_table` VALUES (3, '红米Note12Turbo', 2099, '9w', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.14646441.png');
INSERT INTO `goods_table` VALUES (4, '红米K60', 2199, '10w', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1672037270.61465433.png');

-- ----------------------------
-- Table structure for image_table
-- ----------------------------
DROP TABLE IF EXISTS `image_table`;
CREATE TABLE `image_table`  (
  `id` int NOT NULL COMMENT 'id',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '路径',
  `describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of image_table
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id``` int NOT NULL AUTO_INCREMENT COMMENT '唯一标识',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  PRIMARY KEY (`id```) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'admin');
INSERT INTO `users` VALUES (12, 'test', 'test');

SET FOREIGN_KEY_CHECKS = 1;
